#include "../src/providers/provider.h"
#include <chrono>
#include <gtest/gtest.h>
#include <thread>

namespace {
std::vector<Event> run(Provider* provider) {
    EXPECT_EQ(provider->start(provider).status, ResultStatus::Ok);

    TurnRequest request;
    request.turn_id = 42;
    request.conversation_id = "thread-a";
    request.prompt = "hello";
    EXPECT_EQ(provider->submit(provider, std::move(request)).status, ResultStatus::Ok);

    std::vector<Event> events;
    const auto deadline = std::chrono::steady_clock::now() + std::chrono::seconds(2);
    while (std::chrono::steady_clock::now() < deadline) {
        auto pending = provider->poll_events(provider);
        events.insert(events.end(), pending.begin(), pending.end());
        if (!events.empty() && (events.back().kind == EventKind::TurnCompleted ||
                                events.back().kind == EventKind::TurnFailed)) {
            break;
        }
        std::this_thread::sleep_for(std::chrono::milliseconds(1));
    }

    return events;
}

Result codex_success(void*, const TurnRequest* request, std::string* answer) {
    EXPECT_EQ(request->prompt, "hello");
    *answer = "Codex answer";
    return result_ok();
}

Result codex_failure(void*, const TurnRequest*, std::string*) {
    return result_error("codex unavailable");
}
} // namespace

TEST(FakeProvider, AnswersAndCompletesTurn) {
    auto provider = make_fake_provider();
    const auto events = run(provider.get());
    ASSERT_EQ(events.size(), 2u);
    EXPECT_EQ(events[0].kind, EventKind::AssistantTextDelta);
    EXPECT_EQ(events[0].text, "How can I help you?");
    EXPECT_EQ(events[1].kind, EventKind::TurnCompleted);
}

TEST(CodexProvider, ExecutesRequestAndEmitsResponse) {
    CodexOptions options;
    options.execute = codex_success;
    auto provider = make_codex_provider(&options);
    const auto events = run(provider.get());
    ASSERT_EQ(events.size(), 2u);
    EXPECT_EQ(events[0].text, "Codex answer");
    EXPECT_EQ(events[1].kind, EventKind::TurnCompleted);
}

TEST(CodexProvider, ReportsExecutionFailure) {
    CodexOptions options;
    options.execute = codex_failure;
    auto provider = make_codex_provider(&options);
    const auto events = run(provider.get());
    ASSERT_EQ(events.size(), 1u);
    EXPECT_EQ(events[0].kind, EventKind::TurnFailed);
    EXPECT_EQ(events[0].text, "codex unavailable");
}
