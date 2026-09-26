#include "chat-panel.h"
#include "imgui.h"

void render_chat_panel(const UIState& state) {
    ImGui::Begin("Chat");
    if (!state.threads.empty() && state.selected_thread < state.threads.size()) {
        const UIThread& thread = state.threads[state.selected_thread];
        ImGui::TextUnformatted(thread.title.c_str());
        ImGui::Separator();
        ImGui::TextWrapped("%s", thread.description.c_str());
    }
    ImGui::End();
}
