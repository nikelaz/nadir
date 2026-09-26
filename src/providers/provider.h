#ifndef PROVIDER_H
#define PROVIDER_H

#include "../base/result.h"
#include "../state/application-state.h"
#include <cstdint>
#include <filesystem>
#include <memory>
#include <string>
#include <string_view>
#include <vector>

using ConversationId = std::string;
using TurnId = std::uint64_t;
using ProviderRequestId = std::string;

enum class EventKind {
    ProviderThreadStarted,
    AssistantTextDelta,
    ToolActivity,
    ApprovalRequested,
    TurnCompleted,
    TurnFailed,
};

struct Event {
    EventKind kind;
    ConversationId conversation_id;
    TurnId turn_id = 0;
    std::string text;
    std::string provider_thread_id;
    ProviderRequestId provider_request_id;
};

struct TurnRequest {
    TurnId turn_id = 0;
    ConversationId conversation_id;
    std::string prompt;
    std::vector<ChatMessage> history;
    std::filesystem::path working_directory;
    std::string model;
    std::string provider_thread_id;
};

enum class ApprovalDecision { ApproveOnce, Deny };

struct Provider;
using ProviderStartFn = Result (*)(Provider*);
using ProviderSubmitFn = Result (*)(Provider*, TurnRequest);
using ProviderRespondFn = Result (*)(Provider*, const ProviderRequestId&, ApprovalDecision);
using ProviderCancelFn = void (*)(Provider*, TurnId);
using ProviderPollFn = std::vector<Event> (*)(Provider*);
using ProviderDestroyFn = void (*)(Provider*);

struct Provider {
    std::string_view name;
    void* state;
    ProviderStartFn start;
    ProviderSubmitFn submit;
    ProviderRespondFn respond_to_request;
    ProviderCancelFn cancel;
    ProviderPollFn poll_events;
    ProviderDestroyFn destroy;
};

inline void destroy_provider(Provider* provider) {
    if (provider != nullptr && provider->destroy != nullptr)
        provider->destroy(provider);
}

using ProviderPtr = std::unique_ptr<Provider, decltype(&destroy_provider)>;

struct CodexOptions {
    std::filesystem::path executable = "codex";
    std::filesystem::path codex_home;
    std::string default_model = "gpt-6-luna";
    Result (*execute)(void*, const TurnRequest*, std::string*) = nullptr;
    void* execute_context = nullptr;
};

ProviderPtr make_fake_provider();
ProviderPtr make_codex_provider(const CodexOptions* options = nullptr);

#endif
