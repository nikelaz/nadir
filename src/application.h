#ifndef APPLICATION_H
#define APPLICATION_H

#include <GLFW/glfw3.h>
#include "base/result.h"

struct Application {
    GLFWwindow *m_window;

    Result glfw_init();
    void glfw_deinit();
    Result imgui_init();
    void imgui_deinit();
    void run();
};

#endif
