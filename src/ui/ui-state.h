#ifndef UI_STATE_H
#define UI_STATE_H

#include <cstddef>
#include <string>
#include <vector>

enum class UIMessageRole {
    User,
    Assistant,
};

struct UIMessage {
    UIMessageRole role;
    std::string content;
};

struct UIThread {
    std::string title;
    std::string description;
    std::vector<UIMessage> messages;
};

struct UIState {
    std::vector<UIThread> threads = {
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
    std::string message_input;
};

#endif
