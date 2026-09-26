#include "dock-area.h"
#include "imgui.h"
#include "imgui_internal.h"

void render_dock_area() {
    const ImGuiID dockspace_id = ImHashStr("MainDockSpace");
    if (ImGui::DockBuilderGetNode(dockspace_id) == nullptr) {
        const ImGuiViewport* viewport = ImGui::GetMainViewport();
        ImGui::DockBuilderAddNode(dockspace_id, ImGuiDockNodeFlags_DockSpace);
        ImGui::DockBuilderSetNodeSize(dockspace_id, viewport->WorkSize);

        ImGuiID threads_id = 0;
        ImGuiID main_id = 0;
        ImGui::DockBuilderSplitNode(dockspace_id, ImGuiDir_Left, 0.25f, &threads_id, &main_id);
        ImGui::DockBuilderDockWindow("Threads", threads_id);
        ImGui::DockBuilderDockWindow("Chat", main_id);
        ImGui::DockBuilderFinish(dockspace_id);
    }

    ImGui::DockSpaceOverViewport(dockspace_id, ImGui::GetMainViewport());
}
