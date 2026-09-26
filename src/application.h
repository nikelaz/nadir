#ifndef APPLICATION_H
#define APPLICATION_H

#include <GLFW/glfw3.h>
#include "base/result.h"
#include "ui/ui-system.h"
#include <optional>

class Application {
public:
    GLFWwindow *m_window = nullptr;
    std::optional<UISystem> m_ui;

    Result init();
    void deinit();
    void run();

private:
    bool m_initialized = false;

    Result window_init();
    void window_deinit();
};

#endif
