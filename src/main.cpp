#include <GLFW/glfw3.h>
#include "application.h"
#include <iostream>

int main() {
    Application app;

    Result glfw_init_result = app.glfw_init();
    if (glfw_init_result.status != ResultStatus::Ok) {
      std::cerr << "GLFW init error: " << glfw_init_result.error << std::endl;
      return 1;
    }

    Result imgui_init_result = app.imgui_init();
    if (imgui_init_result.status != ResultStatus::Ok) {
      std::cerr << "Imgui init error: " << imgui_init_result.error << std::endl;
      app.glfw_deinit();
      return 1;
    }

    app.run();

    app.imgui_deinit();
    app.glfw_deinit();
    return 0;
}
