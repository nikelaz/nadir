#include "chat-panel.h"
#include "imgui.h"
#include "misc/cpp/imgui_stdlib.h"
#include <cfloat>
#include <utility>

void render_chat_panel(ApplicationState& state, std::string& message_input) {
    ImGui::Begin("Chat");
    if (!state.threads.empty() && state.selected_thread < state.threads.size()) {
        ChatThread& thread = state.threads[state.selected_thread];
        ImGui::TextUnformatted(thread.title.c_str());
        ImGui::Separator();
        ImGui::TextWrapped("%s", thread.description.c_str());
        ImGui::Spacing();

        ImGui::BeginChild("##messages", ImVec2(0.0f, -ImGui::GetFrameHeightWithSpacing() * 5.0f), true);
        for (const ChatMessage& message : thread.messages) {
            const char* role = message.role == ChatMessageRole::User ? "You" : "Assistant";
            ImGui::TextUnformatted(role);
            ImGui::TextWrapped("%s", message.content.c_str());
            ImGui::Spacing();
        }
        ImGui::EndChild();

        const bool enter_pressed = ImGui::InputTextMultiline(
            "##message-input", &message_input, ImVec2(-FLT_MIN, 72.0f),
            ImGuiInputTextFlags_EnterReturnsTrue | ImGuiInputTextFlags_CtrlEnterForNewLine);
        ImGui::SameLine();
        if (enter_pressed || ImGui::Button("Send")) {
            if (!message_input.empty()) {
                thread.messages.push_back({ChatMessageRole::User, std::move(message_input)});
                thread.messages.push_back({ChatMessageRole::Assistant, "How can I help you?"});
                message_input.clear();
            }
        }
    }
    ImGui::End();
}
