#include "ui-system.h"
#include "chat-panel.h"
#include "dock-area.h"
#include "threads-panel.h"
#include <GLFW/glfw3.h>
#include "imgui.h"
#include "imgui_impl_glfw.h"
#include "imgui_impl_opengl3.h"

UISystem::UISystem(GLFWwindow* window, ApplicationState& state)
  : m_window(window), m_state(state) {}

Result UISystem::init() {
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

    m_initialized = true;

    return result_ok();
}

void UISystem::deinit() {
    ImGui_ImplOpenGL3_Shutdown();
    ImGui_ImplGlfw_Shutdown();
    ImGui::DestroyContext();
    m_initialized = false;
}

void UISystem::new_frame() {
    ImGui_ImplOpenGL3_NewFrame();
    ImGui_ImplGlfw_NewFrame();
    ImGui::NewFrame();
}

void UISystem::prepare_backbuffer()
{
  ImGui::Render();

  int width;
  int height;
  glfwGetFramebufferSize(m_window, &width, &height);
  glViewport(0, 0, width, height);
  // TODO: This color should be a part of the pallete/theme
  glClearColor(0.08f, 0.08f, 0.08f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);
  ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
}

void UISystem::render_frame_to_backbuffer() {
    new_frame();

    render_dock_area();
    render_threads_panel(m_state);
    render_chat_panel(m_state, m_message_input);

    prepare_backbuffer();
}
