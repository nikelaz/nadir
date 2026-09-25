#include "application.h"
#include <iostream>
#include <GLFW/glfw3.h>
#include "imgui.h"
#include "imgui_impl_glfw.h"
#include "imgui_impl_opengl3.h"
#include "base/result.h"

constexpr int kWindowWidth = 1440;
constexpr int kWindowHeight = 900;

static void glfw_error_callback(int code, const char* description) {
    std::cerr << "GLFW error " << code << ": " << description << '\n';
}

Result Application::glfw_init() {
    glfwSetErrorCallback(glfw_error_callback);

    if (glfwInit() != GLFW_TRUE) {
        return result_error("Failed to initialize GLFW");
    }

    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 2);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    #ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GLFW_TRUE);
    #endif

    m_window = glfwCreateWindow(
        kWindowWidth,
        kWindowHeight,
        "Nadir",
        nullptr,
        nullptr 
    );

    if (m_window == nullptr) {
        return result_error("Failed to create application window");
    }

    glfwMakeContextCurrent(m_window);
    glfwSwapInterval(1);

    return result_ok();
};

void Application::glfw_deinit() { 
    glfwDestroyWindow(m_window);
    glfwTerminate();
}

Result Application::imgui_init() {
    IMGUI_CHECKVERSION();
    ImGui::CreateContext();
    ImGuiIO& io = ImGui::GetIO();
    io.ConfigFlags |= ImGuiConfigFlags_DockingEnable;
    ImGui::StyleColorsDark();

    if (!ImGui_ImplGlfw_InitForOpenGL(m_window, true)) {
        ImGui::DestroyContext();
        return result_error("Failed to initialize Dear ImGui Glfw OpenGL backend");
    }

    if (!ImGui_ImplOpenGL3_Init("#version 150")) {
        ImGui_ImplGlfw_Shutdown();
        ImGui::DestroyContext();
        return result_error("Failed to initialize Dear ImGui OpenGL 3 backend");
    }

    return result_ok();
}

void Application::imgui_deinit() {
    ImGui_ImplOpenGL3_Shutdown();
    ImGui_ImplGlfw_Shutdown();
    ImGui::DestroyContext();
}

void Application::run() {
    while (glfwWindowShouldClose(m_window) == GLFW_FALSE) {
        glfwPollEvents();

        ImGui_ImplOpenGL3_NewFrame();
        ImGui_ImplGlfw_NewFrame();
        ImGui::NewFrame();

        ImGui::DockSpaceOverViewport(0, ImGui::GetMainViewport());

        ImGui::Begin("Agent Harness");
        ImGui::TextUnformatted("Agent orchestration workspace");
        ImGui::Separator();
        ImGui::TextUnformatted("Project scaffold is ready.");
        ImGui::End();

        ImGui::Render();
        int display_width = 0;
        int display_height = 0;
        glfwGetFramebufferSize(m_window, &display_width, &display_height);
        glViewport(0, 0, display_width, display_height);
        glClearColor(0.08F, 0.09F, 0.11F, 1.0F);
        glClear(GL_COLOR_BUFFER_BIT);
        ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
        glfwSwapBuffers(m_window);
    }
}
