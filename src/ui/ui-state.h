#ifndef UI_STATE_H
#define UI_STATE_H

#include <cstddef>
#include <string>
#include <vector>

struct UIThread {
    std::string title;
    std::string description;
};

struct UIState {
    std::vector<UIThread> threads = {
        {
            "Project setup",
            "Getting the application structure and core systems in place."
        },
        {
            "UI layout",
            "Planning the workspace panels and how they fit together."
        },
    };
    std::size_t selected_thread = 0;
};

#endif
