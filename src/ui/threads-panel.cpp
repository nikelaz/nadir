#include "threads-panel.h"
#include "imgui.h"

void render_threads_panel(ApplicationState& state) {
    ImGui::Begin("Threads");
    ImGui::TextUnformatted("Threads");
    ImGui::Separator();
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
        const float description_height = ImGui::CalcTextSize(
            state.threads[i].description.c_str(), nullptr, false, description_width).y;
        const float card_height = style.FramePadding.y * 2.0f + ImGui::GetTextLineHeight() +
            style.ItemSpacing.y + description_height;

        if (ImGui::Selectable("##thread", state.selected_thread == i, 0, ImVec2(0.0f, card_height))) {
            state.selected_thread = i;
        }
        const ImVec2 card_min = ImGui::GetItemRectMin();
        const ImVec2 card_max = ImGui::GetItemRectMax();
        const ImVec2 cursor_after_card = ImGui::GetCursorPos();

        ImGui::SetCursorScreenPos(ImVec2(card_min.x + style.FramePadding.x,
                                         card_min.y + style.FramePadding.y));
        ImGui::TextUnformatted(state.threads[i].title.c_str());
        ImGui::PushTextWrapPos(card_max.x - style.FramePadding.x);
        ImGui::TextUnformatted(state.threads[i].description.c_str());
        ImGui::PopTextWrapPos();
        ImGui::SetCursorPos(cursor_after_card);
        ImGui::PopID();
        ImGui::Spacing();
    }
    ImGui::End();
}
