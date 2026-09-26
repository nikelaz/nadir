#include "chat-panel.h"
#include "imgui.h"
#include "misc/cpp/imgui_stdlib.h"
#include <cfloat>
#include <utility>
void render_chat_panel(ApplicationState& state, std::string& message_input, Provider& provider) {
    ImGui::Begin("Chat");
    if (!state.threads.empty() && state.selected_thread < state.threads.size()) {
        ChatThread& thread = state.threads[state.selected_thread];
        ImGui::TextUnformatted(thread.title.c_str());
        ImGui::Separator();
        ImGui::TextWrapped("%s", thread.description.c_str());
        ImGui::Spacing();
        ImGui::BeginChild("##messages", ImVec2(0.0f, -ImGui::GetFrameHeightWithSpacing() * 5.0f),
                          true);
        for (const ChatMessage& message : thread.messages) {
            const char* role = message.role == ChatMessageRole::User ? "You" : "Assistant";
            ImGui::TextUnformatted(role);
            if (!message.reasoning.empty()) {
                ImGui::PushStyleColor(ImGuiCol_Text, ImVec4(0.65f, 0.72f, 0.82f, 1.0f));
                if (ImGui::TreeNode("##thinking", "Thinking")) {
                    ImGui::Indent();
                    ImGui::TextWrapped("%s", message.reasoning.c_str());
                    ImGui::Unindent();
                    ImGui::TreePop();
                }
                ImGui::PopStyleColor();
            }
            for (const std::string& activity : message.tool_activities) {
                ImGui::PushID(&activity);
                ImGui::PushStyleColor(ImGuiCol_ChildBg, ImVec4(0.12f, 0.14f, 0.18f, 1.0f));
                ImGui::BeginChild("##tool", ImVec2(0.0f, ImGui::GetTextLineHeightWithSpacing() * 1.8f), true);
                ImGui::TextColored(ImVec4(0.55f, 0.78f, 0.96f, 1.0f), "%s", "⚙");
                ImGui::SameLine();
                ImGui::TextColored(ImVec4(0.72f, 0.82f, 0.90f, 1.0f), "%s", "Tool");
                ImGui::SameLine();
                ImGui::TextWrapped("%s", activity.c_str());
                ImGui::EndChild();
                ImGui::PopStyleColor();
                ImGui::PopID();
            }
            ImGui::TextWrapped("%s", message.content.c_str());
            ImGui::Spacing();
        }
        ImGui::EndChild();
        const bool enter = ImGui::InputTextMultiline(
            "##message-input", &message_input, ImVec2(-FLT_MIN, 72.0f),
            ImGuiInputTextFlags_EnterReturnsTrue | ImGuiInputTextFlags_CtrlEnterForNewLine);
        ImGui::SameLine();
        if ((enter || ImGui::Button("Send")) && !message_input.empty()) {
            std::string prompt = std::move(message_input);
            message_input.clear();
            thread.messages.push_back({ChatMessageRole::User, prompt});
            TurnRequest request;
            request.conversation_id = std::to_string(state.selected_thread);
            request.prompt = std::move(prompt);
            request.history = thread.messages;
            const Result submitted = provider.submit(&provider, std::move(request));
            if (submitted.status == ResultStatus::Error)
                thread.messages.push_back(
                    {ChatMessageRole::Assistant, std::string(submitted.error)});
        }
    }
    ImGui::End();
}
