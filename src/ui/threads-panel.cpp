#include "threads-panel.h"
#include "imgui.h"
#include <algorithm>
#include <cstdint>
#include <optional>
#include <string>

namespace {
std::string next_thread_id(const ApplicationState& state) {
    static std::uint64_t next_id = 1;
    for (;;) {
        const std::string candidate = "thread-" + std::to_string(next_id++);
        const bool exists = std::any_of(state.threads.begin(), state.threads.end(),
            [&candidate](const ChatThread& thread) { return thread.id == candidate; });
        if (!exists)
            return candidate;
    }
}
}

void render_threads_panel(ApplicationState& state) {
    static std::optional<std::size_t> pending_delete;
    bool open_delete_confirmation = false;
    std::optional<std::size_t> pending_selection;

    ImGui::Begin("Threads");
    const float button_line_x = ImGui::GetCursorPosX();
    const float button_width = ImGui::GetContentRegionAvail().x;
    const float horizontal_bleed = ImGui::GetStyle().ItemSpacing.x * 0.5f;
    ImGui::SetCursorPosX(button_line_x - horizontal_bleed);
    ImGui::PushStyleVar(ImGuiStyleVar_FrameRounding, 6.0f);
    ImGui::PushStyleVar(ImGuiStyleVar_ButtonTextAlign, ImVec2(0.0f, 0.5f));
    const bool new_thread = ImGui::Button("+ New thread",
                                          ImVec2(button_width + horizontal_bleed * 2.0f, 0.0f));
    ImGui::PopStyleVar();
    ImGui::PopStyleVar();
    ImGui::SetCursorPosX(button_line_x);
    if (new_thread) {
        state.threads.insert(state.threads.begin(), {
            "New thread " + std::to_string(state.threads.size() + 1),
            "A new conversation.",
            next_thread_id(state),
            {},
        });
        state.selected_thread = 0;
    }
    ImGui::Spacing();

    for (std::size_t i = 0; i < state.threads.size(); ++i) {
        ImGui::PushID(static_cast<int>(i));
        const ImGuiStyle& style = ImGui::GetStyle();
        const float width = ImGui::GetContentRegionAvail().x;
        const float description_width = width - style.FramePadding.x * 2.0f;
        const float description_height = ImGui::CalcTextSize(state.threads[i].description.c_str(),
                                                             nullptr, false, description_width)
                                             .y;
        const float card_height = style.FramePadding.y * 2.0f + ImGui::GetTextLineHeight() +
                                  style.ItemSpacing.y + description_height;

        const bool selected = ImGui::Selectable("##thread", state.selected_thread == i, 0,
                                                ImVec2(0.0f, card_height));
        if (selected)
            pending_selection = i;

        if (ImGui::BeginPopupContextItem("thread_context", ImGuiPopupFlags_MouseButtonRight)) {
            if (ImGui::MenuItem("Delete thread")) {
                pending_delete = i;
                open_delete_confirmation = true;
            }
            ImGui::EndPopup();
        }

        const ImVec2 card_min = ImGui::GetItemRectMin();
        const ImVec2 card_max = ImGui::GetItemRectMax();
        const ImVec2 cursor_after_card = ImGui::GetCursorPos();

        const float text_x = card_min.x + style.FramePadding.x;
        const float title_y = card_min.y + style.FramePadding.y;
        ImGui::SetCursorScreenPos(ImVec2(text_x, title_y));
        ImGui::TextUnformatted(state.threads[i].title.c_str());
        ImGui::SetCursorScreenPos(
            ImVec2(text_x, title_y + ImGui::GetTextLineHeight() + style.ItemSpacing.y));
        ImGui::PushTextWrapPos(card_max.x - style.FramePadding.x);
        ImGui::TextUnformatted(state.threads[i].description.c_str());
        ImGui::PopTextWrapPos();
        ImGui::SetCursorPos(cursor_after_card);

        ImGui::PopID();
        ImGui::Spacing();
    }

    if (pending_selection && *pending_selection > 0) {
        const std::size_t index = *pending_selection;
        std::rotate(state.threads.begin(), state.threads.begin() + index,
                    state.threads.begin() + index + 1);
        if (pending_delete && *pending_delete < index)
            ++*pending_delete;
        state.selected_thread = 0;
    } else if (pending_selection) {
        state.selected_thread = 0;
    }

    if (open_delete_confirmation)
        ImGui::OpenPopup("Confirm thread deletion");

    if (ImGui::BeginPopupModal("Confirm thread deletion", nullptr,
                               ImGuiWindowFlags_AlwaysAutoResize)) {
        if (pending_delete && *pending_delete < state.threads.size()) {
            const std::size_t index = *pending_delete;
            ImGui::Text("Delete thread \"%s\"?", state.threads[index].title.c_str());
            ImGui::TextUnformatted("This cannot be undone.");
            ImGui::Spacing();

            ImGui::PushStyleVar(ImGuiStyleVar_FrameRounding, 6.0f);
            const bool delete_thread = ImGui::Button("Delete", ImVec2(120.0f, 0.0f));
            ImGui::PopStyleVar();
            if (delete_thread) {
                state.threads.erase(state.threads.begin() + static_cast<std::ptrdiff_t>(index));
                if (state.threads.empty()) {
                    state.selected_thread = 0;
                } else if (state.selected_thread > index) {
                    --state.selected_thread;
                } else if (state.selected_thread >= state.threads.size()) {
                    state.selected_thread = state.threads.size() - 1;
                }
                pending_delete.reset();
                ImGui::CloseCurrentPopup();
            }
            ImGui::SameLine();
            ImGui::PushStyleVar(ImGuiStyleVar_FrameRounding, 6.0f);
            const bool cancel_delete = ImGui::Button("Cancel", ImVec2(120.0f, 0.0f));
            ImGui::PopStyleVar();
            if (cancel_delete) {
                pending_delete.reset();
                ImGui::CloseCurrentPopup();
            }
        } else {
            pending_delete.reset();
            ImGui::CloseCurrentPopup();
        }
        ImGui::EndPopup();
    }

    ImGui::End();
}
