#include "threads-panel.h"
#include "imgui.h"
#include <optional>

void render_threads_panel(ApplicationState& state) {
    static std::optional<std::size_t> pending_delete;
    bool open_delete_confirmation = false;

    ImGui::Begin("Threads");
    if (ImGui::Button("+ New thread", ImVec2(ImGui::GetContentRegionAvail().x, 0.0f))) {
        state.threads.push_back({
            "New thread " + std::to_string(state.threads.size() + 1),
            "A new conversation.",
            {},
        });
        state.selected_thread = state.threads.size() - 1;
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

        if (ImGui::Selectable("##thread", state.selected_thread == i, 0,
                              ImVec2(0.0f, card_height))) {
            state.selected_thread = i;
        }

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

        ImGui::SetCursorScreenPos(
            ImVec2(card_min.x + style.FramePadding.x, card_min.y + style.FramePadding.y));
        ImGui::TextUnformatted(state.threads[i].title.c_str());
        ImGui::PushTextWrapPos(card_max.x - style.FramePadding.x);
        ImGui::TextUnformatted(state.threads[i].description.c_str());
        ImGui::PopTextWrapPos();
        ImGui::SetCursorPos(cursor_after_card);

        ImGui::PopID();
        ImGui::Spacing();
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

            if (ImGui::Button("Delete", ImVec2(120.0f, 0.0f))) {
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
            if (ImGui::Button("Cancel", ImVec2(120.0f, 0.0f))) {
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
