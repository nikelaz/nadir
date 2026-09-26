#include "ui-system.h"
#include "chat-panel.h"
#include "dock-area.h"
#include "imgui.h"
#include "imgui_impl_glfw.h"
#include "imgui_impl_opengl3.h"
#include "threads-panel.h"
#include <GLFW/glfw3.h>
#include <algorithm>
#include <iterator>

UISystem::UISystem(GLFWwindow* window, ApplicationState& state, Provider& provider)
    : m_window(window), m_state(state), m_provider(provider) {}

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

void UISystem::prepare_backbuffer() {
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

    for (const Event& event : m_provider.poll_events(&m_provider)) {
        try {
            const auto index = static_cast<std::size_t>(std::stoull(event.conversation_id));
            if (index >= m_state.threads.size())
                continue;
            auto& messages = m_state.threads[index].messages;
            if (event.kind == EventKind::ReasoningSummaryDelta ||
                event.kind == EventKind::AssistantReasoningDelta ||
                event.kind == EventKind::ToolActivity) {
                if (m_progress_conversation_id != event.conversation_id) {
                    m_progress_conversation_id = event.conversation_id;
                    m_progress_text.clear();
                }
                if (event.kind == EventKind::ReasoningSummaryDelta ||
                    event.kind == EventKind::AssistantReasoningDelta) {
                    m_progress_text += event.text;
                    if (messages.empty() || messages.back().role != ChatMessageRole::Assistant)
                        messages.push_back({ChatMessageRole::Assistant, {}});
                    messages.back().reasoning += event.text;
                } else {
                    if (messages.empty() || messages.back().role != ChatMessageRole::Assistant)
                        messages.push_back({ChatMessageRole::Assistant, {}});
                    ChatMessage& message = messages.back();
                    auto segment = message.segments.end();
                    if (!event.item_id.empty()) {
                        segment = std::find_if(message.segments.begin(), message.segments.end(),
                                               [&event](const ChatSegment& value) {
                                                   return value.kind == ChatSegment::Kind::Tool &&
                                                          value.tool.id == event.item_id;
                                               });
                    }
                    if (segment == message.segments.end()) {
                        ChatSegment value;
                        value.kind = ChatSegment::Kind::Tool;
                        value.tool.id = event.item_id;
                        message.segments.push_back(std::move(value));
                        segment = std::prev(message.segments.end());
                    }
                    if (!event.text.empty())
                        segment->tool.command = event.text;
                    if (!event.cwd.empty())
                        segment->tool.cwd = event.cwd;
                    if (!event.output.empty()) {
                        if (event.output_is_delta)
                            segment->tool.output += event.output;
                        else if (segment->tool.output.empty())
                            segment->tool.output = event.output;
                    }
                    if (!event.status.empty())
                        segment->tool.status = event.status;
                    if (event.exit_code >= 0)
                        segment->tool.exit_code = event.exit_code;
                    if (event.duration_ms >= 0)
                        segment->tool.duration_ms = event.duration_ms;
                    if (event.tool_completed)
                        segment->tool.completed = true;
                }
            } else if (event.kind == EventKind::AssistantTextDelta) {
                m_progress_text.clear();
                m_progress_conversation_id = event.conversation_id;
                if (messages.empty() || messages.back().role != ChatMessageRole::Assistant)
                    messages.push_back({ChatMessageRole::Assistant, {}});
                ChatMessage& message = messages.back();
                message.content += event.text;
                if (message.segments.empty() || message.segments.back().kind != ChatSegment::Kind::Text)
                    message.segments.push_back({ChatSegment::Kind::Text, {}, {}});
                message.segments.back().text += event.text;
            } else if (event.kind == EventKind::TurnFailed) {
                m_progress_text.clear();
                messages.push_back({ChatMessageRole::Assistant, event.text});
            } else if (event.kind == EventKind::TurnCompleted) {
                m_progress_text.clear();
            }
        } catch (...) {
        }
    }
    render_dock_area();
    render_threads_panel(m_state);
    render_chat_panel(m_state, m_message_input, m_provider, m_progress_text, m_progress_conversation_id);

    prepare_backbuffer();
}
