#ifndef APPLICATION_STATE_H
#define APPLICATION_STATE_H

#include <cstddef>
#include <string>
#include <vector>

enum class ChatMessageRole {
    User,
    Assistant,
};

struct ChatMessage {
    ChatMessageRole role;
    std::string content;
    std::string reasoning;
    std::vector<std::string> tool_activities;
};

struct ChatThread {
    std::string title;
    std::string description;
    std::vector<ChatMessage> messages;
};

struct ApplicationState {
    std::vector<ChatThread> threads = {
        {
            "Project setup",
            "Getting the application structure and core systems in place.",
            {}
        },
        {
            "UI layout",
            "Planning the workspace panels and how they fit together.",
            {}
        },
    };
    std::size_t selected_thread = 0;
};

#endif
