#include "provider_runtime.h"

namespace {
struct FakeState {
    ProviderRuntime runtime;
};

void process_fake(void*, const TurnRequest* request, std::vector<Event>* events) {
    events->push_back(Event{EventKind::AssistantTextDelta,
                            request->conversation_id,
                            request->turn_id,
                            "How can I help you?",
                            {},
                            {}});
    events->push_back(
        Event{EventKind::TurnCompleted, request->conversation_id, request->turn_id, {}, {}, {}});
}

Result start_fake(Provider* provider) {
    FakeState* state = static_cast<FakeState*>(provider->state);
    return provider_runtime_start(&state->runtime);
}

Result submit_fake(Provider* provider, TurnRequest request) {
    FakeState* state = static_cast<FakeState*>(provider->state);
    return provider_runtime_submit(&state->runtime, std::move(request));
}

Result respond_fake(Provider*, const ProviderRequestId&, ApprovalDecision) {
    return result_error("Provider has no pending approval request");
}

void cancel_fake(Provider*, TurnId) {}

std::vector<Event> poll_fake(Provider* provider) {
    FakeState* state = static_cast<FakeState*>(provider->state);
    return provider_runtime_poll_events(&state->runtime);
}

void destroy_fake(Provider* provider) {
    FakeState* state = static_cast<FakeState*>(provider->state);
    provider_runtime_shutdown(&state->runtime);
    delete state;
    delete provider;
}
} // namespace

ProviderPtr make_fake_provider() {
    FakeState* state = new FakeState{};
    provider_runtime_init(&state->runtime, process_fake, nullptr);

    Provider* provider = new Provider{"fake",       state,       start_fake, submit_fake,
                                      respond_fake, cancel_fake, poll_fake,  destroy_fake};
    return ProviderPtr(provider, destroy_provider);
}
