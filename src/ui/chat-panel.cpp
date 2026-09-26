#include "chat-panel.h"
#include "imgui.h"
#include "imgui_md.h"
#include "misc/cpp/imgui_stdlib.h"
#include <cfloat>
#include <cmath>
#include <utility>

namespace {
void render_tool_icon() {
    const ImVec2 center = ImGui::GetCursorScreenPos();
    const float radius = ImGui::GetTextLineHeight() * 0.32f;
    const ImVec2 icon_center(center.x + radius, center.y + ImGui::GetTextLineHeight() * 0.5f);
    ImDrawList* draw_list = ImGui::GetWindowDrawList();
    const ImU32 color = ImGui::GetColorU32(ImVec4(0.55f, 0.78f, 0.96f, 1.0f));

    draw_list->AddCircle(icon_center, radius, color, 12, 1.8f);
    draw_list->AddCircleFilled(icon_center, radius * 0.3f, color, 8);
    for (int spoke = 0; spoke < 8; ++spoke) {
        const float angle = static_cast<float>(spoke) * 0.785398163f;
        const ImVec2 inner(icon_center.x + std::cos(angle) * radius * 0.78f,
                           icon_center.y + std::sin(angle) * radius * 0.78f);
        const ImVec2 outer(icon_center.x + std::cos(angle) * radius * 1.18f,
                           icon_center.y + std::sin(angle) * radius * 1.18f);
        draw_list->AddLine(inner, outer, color, 1.8f);
    }
    ImGui::Dummy(ImVec2(radius * 2.4f, ImGui::GetTextLineHeight()));
}

void render_tool_activity(const ToolActivity& tool) {
    const std::string status = tool.status.empty()
        ? (tool.completed ? "Completed" : "Running") : tool.status;
    ImGui::PushStyleVar(ImGuiStyleVar_FramePadding, ImVec2(8.0f, 6.0f));
    ImGui::PushStyleVar(ImGuiStyleVar_ItemSpacing, ImVec2(8.0f, 6.0f));
    ImGui::PushStyleColor(ImGuiCol_Header, ImVec4(0.12f, 0.14f, 0.18f, 1.0f));
    ImGui::PushStyleColor(ImGuiCol_HeaderHovered, ImVec4(0.16f, 0.19f, 0.24f, 1.0f));
    ImGui::PushStyleColor(ImGuiCol_HeaderActive, ImVec4(0.18f, 0.22f, 0.28f, 1.0f));

    ImDrawList* draw_list = ImGui::GetWindowDrawList();
    draw_list->ChannelsSplit(2);
    draw_list->ChannelsSetCurrent(1);
    const ImVec2 card_min = ImGui::GetCursorScreenPos();
    ImGui::BeginGroup();
    const bool expanded = ImGui::TreeNodeEx("##tool-card", ImGuiTreeNodeFlags_SpanAvailWidth, "Tool");
    ImGui::SameLine();
    render_tool_icon();
    ImGui::SameLine();
    ImGui::TextColored(ImVec4(0.72f, 0.82f, 0.90f, 1.0f), "%s", status.c_str());
    if (expanded) {
        ImGui::Spacing();
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
        ImGui::TreePop();
    }
    ImGui::EndGroup();
    const ImVec2 card_max = ImGui::GetItemRectMax();
    draw_list->ChannelsSetCurrent(0);
    draw_list->AddRectFilled(card_min, ImVec2(ImGui::GetWindowPos().x + ImGui::GetWindowWidth() - ImGui::GetStyle().WindowPadding.x, card_max.y),
                             ImGui::GetColorU32(ImVec4(0.12f, 0.14f, 0.18f, 1.0f)), 5.0f);
    draw_list->ChannelsMerge();
    ImGui::PopStyleColor(3);
    ImGui::PopStyleVar(2);
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
        const bool was_at_bottom = ImGui::GetScrollY() >= ImGui::GetScrollMaxY() - 1.0f;
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
        if (was_at_bottom)
            ImGui::SetScrollHereY(1.0f);
        ImGui::EndChild();
        ImGui::PopStyleVar();
        const ImVec2 input_pos = ImGui::GetCursorScreenPos();
        const float full_width = ImGui::GetContentRegionAvail().x;
        constexpr float outer_padding = 8.0f;
        constexpr float input_height = 58.0f;
        constexpr float footer_height = 38.0f;
        constexpr float total_height = outer_padding + input_height + footer_height;
        const float send_size = 32.0f;
        const ImVec2 frame_max(input_pos.x + full_width, input_pos.y + total_height);
        ImDrawList* draw_list = ImGui::GetWindowDrawList();
        draw_list->AddRectFilled(input_pos, frame_max,
                                 ImGui::GetColorU32(ImGuiCol_FrameBg),
                                 ImGui::GetStyle().FrameRounding);
        draw_list->AddRect(input_pos, frame_max,
                           ImGui::GetColorU32(ImGuiCol_Border),
                           ImGui::GetStyle().FrameRounding);
        const float divider_y = input_pos.y + outer_padding + input_height;
        draw_list->AddLine(ImVec2(input_pos.x + 1.0f, divider_y),
                           ImVec2(frame_max.x - 1.0f, divider_y),
                           ImGui::GetColorU32(ImGuiCol_Border), 1.0f);

        ImGui::PushStyleVar(ImGuiStyleVar_FrameBorderSize, 0.0f);
        ImGui::PushStyleColor(ImGuiCol_FrameBg, ImVec4(0.0f, 0.0f, 0.0f, 0.0f));
        ImGui::PushStyleColor(ImGuiCol_FrameBgHovered, ImVec4(0.0f, 0.0f, 0.0f, 0.0f));
        ImGui::PushStyleColor(ImGuiCol_FrameBgActive, ImVec4(0.0f, 0.0f, 0.0f, 0.0f));
        ImGui::SetCursorScreenPos(ImVec2(input_pos.x + outer_padding,
                                         input_pos.y + outer_padding));
        const bool enter = ImGui::InputTextMultiline(
            "##message-input", &message_input,
            ImVec2(full_width - outer_padding * 2.0f, input_height),
            ImGuiInputTextFlags_EnterReturnsTrue | ImGuiInputTextFlags_CtrlEnterForNewLine);
        ImGui::PopStyleColor(3);
        ImGui::PopStyleVar();
        const ImVec2 send_pos(frame_max.x - send_size - outer_padding,
                              divider_y + (footer_height - send_size) * 0.5f);
        ImGui::SetCursorScreenPos(send_pos);
        const bool send_clicked = ImGui::InvisibleButton("##send-message", ImVec2(send_size, send_size));
        const ImVec2 button_min = ImGui::GetItemRectMin();
        const ImVec2 button_max = ImGui::GetItemRectMax();
        const ImU32 button_color = ImGui::GetColorU32(
            ImGui::IsItemActive() ? ImVec4(0.20f, 0.48f, 0.68f, 1.0f)
            : ImGui::IsItemHovered() ? ImVec4(0.18f, 0.42f, 0.60f, 1.0f)
                                     : ImVec4(0.15f, 0.34f, 0.48f, 1.0f));
        draw_list->AddRectFilled(button_min, button_max, button_color, 5.0f);
        const ImVec2 arrow_center((button_min.x + button_max.x) * 0.5f,
                                  (button_min.y + button_max.y) * 0.5f);
        const ImU32 arrow_color = ImGui::GetColorU32(ImVec4(0.94f, 0.97f, 1.0f, 1.0f));
        draw_list->AddLine(ImVec2(arrow_center.x, arrow_center.y + 6.0f),
                           ImVec2(arrow_center.x, arrow_center.y - 5.0f), arrow_color, 2.0f);
        draw_list->AddLine(ImVec2(arrow_center.x, arrow_center.y - 5.0f),
                           ImVec2(arrow_center.x - 4.5f, arrow_center.y - 0.5f), arrow_color, 2.0f);
        draw_list->AddLine(ImVec2(arrow_center.x, arrow_center.y - 5.0f),
                           ImVec2(arrow_center.x + 4.5f, arrow_center.y - 0.5f), arrow_color, 2.0f);
        ImGui::SetCursorScreenPos(input_pos);
        ImGui::Dummy(ImVec2(full_width, total_height));
        if ((enter || send_clicked) && !message_input.empty()) {
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
