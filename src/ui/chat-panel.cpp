#include "chat-panel.h"
#include "imgui.h"
#include "imgui_md.h"
#include "misc/cpp/imgui_stdlib.h"
#include <cfloat>
#include <utility>

namespace {
void render_tool_activity(const ToolActivity& tool) {
    ImGui::PushStyleColor(ImGuiCol_ChildBg, ImVec4(0.12f, 0.14f, 0.18f, 1.0f));
    ImGui::BeginChild("##tool", ImVec2(0.0f, ImGui::GetTextLineHeightWithSpacing() * 4.0f), true);
    ImGui::TextColored(ImVec4(0.55f, 0.78f, 0.96f, 1.0f), "%s", "⚙ Tool");
    ImGui::SameLine();
    const std::string status = tool.status.empty()
        ? (tool.completed ? "Completed" : "Running") : tool.status;
    ImGui::TextColored(ImVec4(0.72f, 0.82f, 0.90f, 1.0f), "%s", status.c_str());
    ImGui::TextWrapped("%s", tool.command.empty() ? "Command details unavailable" : tool.command.c_str());
    if (!tool.cwd.empty())
        ImGui::TextWrapped("Working directory: %s", tool.cwd.c_str());
    if (tool.exit_code.has_value())
        ImGui::Text("Exit code: %d", *tool.exit_code);
    if (tool.duration_ms.has_value())
        ImGui::Text("Duration: %d ms", *tool.duration_ms);
    if (!tool.output.empty() && ImGui::TreeNode("##tool-output", "Output")) {
        ImGui::TextWrapped("%s", tool.output.c_str());
        ImGui::TreePop();
    }
    ImGui::EndChild();
    ImGui::PopStyleColor();
}
}

void render_chat_panel(ApplicationState& state, std::string& message_input, Provider& provider,
                       const std::string& progress_text, const std::string& progress_conversation_id) {
    static imgui_md markdown;
    ImGui::Begin("Chat");
    if (!state.threads.empty() && state.selected_thread < state.threads.size()) {
        ChatThread& thread = state.threads[state.selected_thread];
        ImGui::PushStyleVar(ImGuiStyleVar_WindowPadding, ImVec2(0.0f, 0.0f));
        ImGui::BeginChild("##messages", ImVec2(0.0f, -ImGui::GetFrameHeightWithSpacing() * 5.0f),
                          false);
        for (const ChatMessage& message : thread.messages) {
            const char* role = message.role == ChatMessageRole::User ? "You" : "Assistant";
            ImGui::TextUnformatted(role);
            if (!message.reasoning.empty()) {
                ImGui::PushStyleColor(ImGuiCol_Text, ImVec4(0.65f, 0.72f, 0.82f, 1.0f));
                if (ImGui::TreeNode("##thinking", "Thinking")) {
                    ImGui::Indent();
                    markdown.print(message.reasoning.c_str(),
                                   message.reasoning.c_str() + message.reasoning.size());
                    ImGui::Unindent();
                    ImGui::TreePop();
                }
                ImGui::PopStyleColor();
            }
            if (message.role == ChatMessageRole::Assistant && !message.segments.empty()) {
                for (const ChatSegment& segment : message.segments) {
                    if (segment.kind == ChatSegment::Kind::Tool) {
                        ImGui::PushID(segment.tool.id.c_str());
                        render_tool_activity(segment.tool);
                        ImGui::PopID();
                    } else if (!segment.text.empty()) {
                        markdown.print(segment.text.c_str(), segment.text.c_str() + segment.text.size());
                    }
                }
            } else if (message.role == ChatMessageRole::Assistant) {
                for (const std::string& activity : message.tool_activities) {
                    ToolActivity tool;
                    tool.command = activity;
                    render_tool_activity(tool);
                }
                markdown.print(message.content.c_str(),
                               message.content.c_str() + message.content.size());
            } else {
                ImGui::TextWrapped("%s", message.content.c_str());
            }
            ImGui::Spacing();
        }
        if (progress_conversation_id == std::to_string(state.selected_thread) && !progress_text.empty()) {
            if (ImGui::TreeNode("##thinking-progress", "Thinking")) {
                markdown.print(progress_text.c_str(), progress_text.c_str() + progress_text.size());
                ImGui::TreePop();
            }
        }
        ImGui::EndChild();
        ImGui::PopStyleVar();
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
