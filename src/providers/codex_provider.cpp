#include "provider_runtime.h"
#include <cstdio>
#include <string>
#include <utility>

struct CodexState {
    ProviderRuntime runtime;
    CodexOptions options;
};

std::string shell_quote(std::string_view value) {
    std::string quoted = "'";
    for (char character : value) {
        if (character == '\'')
            quoted += "'\\''";
        else
            quoted += character;
    }
    return quoted + "'";
}

Result run_codex(const CodexOptions* options, const TurnRequest* request, std::string* answer) {
    std::string command = shell_quote(options->executable.string()) + " exec --json";
    if (!options->default_model.empty()) {
        const std::string& model = request->model.empty() ? options->default_model : request->model;
        command += " --model " + shell_quote(model);
    }
    if (!request->working_directory.empty())
        command += " --cd " + shell_quote(request->working_directory.string());
    command += " " + shell_quote(request->prompt) + " 2>&1";

    FILE* pipe = popen(command.c_str(), "r");
    if (!pipe)
        return result_error("Failed to start Codex CLI");

    char buffer[4096];
    std::string output;
    while (fgets(buffer, sizeof(buffer), pipe))
        output += buffer;

    const int status = pclose(pipe);
    if (status != 0)
        return result_error(output.empty() ? "Codex CLI failed" : output);

    // Codex --json emits JSONL. Extract text values from the assistant event stream.
    std::size_t position = 0;
    while ((position = output.find("\"text\":\"", position)) != std::string::npos) {
        position += 8;
        while (position < output.size() && output[position] != '"') {
            if (output[position] == '\\' && position + 1 < output.size()) {
                ++position;
                const char escaped = output[position++];
                *answer += escaped == 'n' ? '\n' : escaped;
            } else {
                *answer += output[position++];
            }
        }
    }
    if (answer->empty())
        *answer = output;

    return result_ok();
}

void process_codex(void* context, const TurnRequest* request, std::vector<Event>* events) {
    CodexState* state = static_cast<CodexState*>(context);
    std::string answer;
    Result result = state->options.execute != nullptr
                        ? state->options.execute(state->options.execute_context, request, &answer)
                        : run_codex(&state->options, request, &answer);
    if (result.status == ResultStatus::Error) {
        events->push_back(Event{EventKind::TurnFailed,
                                request->conversation_id,
                                request->turn_id,
                                std::string(result.error),
                                {},
                                {}});
        return;
    }

    events->push_back(Event{EventKind::AssistantTextDelta,
                            request->conversation_id,
                            request->turn_id,
                            std::move(answer),
                            {},
                            {}});
    events->push_back(
        Event{EventKind::TurnCompleted, request->conversation_id, request->turn_id, {}, {}, {}});
}

Result start_codex(Provider* provider) {
    CodexState* state = static_cast<CodexState*>(provider->state);
    return provider_runtime_start(&state->runtime);
}

Result submit_codex(Provider* provider, TurnRequest request) {
    CodexState* state = static_cast<CodexState*>(provider->state);
    return provider_runtime_submit(&state->runtime, std::move(request));
}

Result respond_codex(Provider*, const ProviderRequestId&, ApprovalDecision) {
    return result_error("Provider has no pending approval request");
}

void cancel_codex(Provider*, TurnId) {}

std::vector<Event> poll_codex(Provider* provider) {
    CodexState* state = static_cast<CodexState*>(provider->state);
    return provider_runtime_poll_events(&state->runtime);
}

void destroy_codex(Provider* provider) {
    CodexState* state = static_cast<CodexState*>(provider->state);
    provider_runtime_shutdown(&state->runtime);
    delete state;
    delete provider;
}

ProviderPtr make_codex_provider(const CodexOptions* options) {
    CodexState* state = new CodexState{};
    if (options != nullptr)
        state->options = *options;
    provider_runtime_init(&state->runtime, process_codex, state);

    Provider* provider = new Provider{"codex",       state,        start_codex, submit_codex,
                                      respond_codex, cancel_codex, poll_codex,  destroy_codex};
    return ProviderPtr(provider, destroy_provider);
}
