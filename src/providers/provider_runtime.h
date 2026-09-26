#ifndef PROVIDER_RUNTIME_H
#define PROVIDER_RUNTIME_H

#include "provider.h"
#include <condition_variable>
#include <mutex>
#include <queue>
#include <thread>

using ProviderProcessFn = void (*)(void*, const TurnRequest*, std::vector<Event>*);

struct ProviderRuntime {
    ProviderProcessFn process;
    void* process_context;
    std::mutex request_mutex;
    std::condition_variable request_ready;
    std::queue<TurnRequest> requests;
    bool stopping;
    TurnId next_turn_id;
    std::thread worker;
    std::mutex event_mutex;
    std::vector<Event> events;
};

void provider_runtime_init(ProviderRuntime* runtime, ProviderProcessFn process,
                           void* process_context);
Result provider_runtime_start(ProviderRuntime* runtime);
Result provider_runtime_submit(ProviderRuntime* runtime, TurnRequest request);
std::vector<Event> provider_runtime_poll_events(ProviderRuntime* runtime);
void provider_runtime_shutdown(ProviderRuntime* runtime);

#endif
