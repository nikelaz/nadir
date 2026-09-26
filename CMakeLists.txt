cmake_minimum_required(VERSION 3.24)

project(AgentHarness VERSION 0.1.0 LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

if(NOT EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/third_party/glfw/CMakeLists.txt")
    message(FATAL_ERROR "Dependencies are missing. Run: git submodule update --init --recursive")
endif()

set(GLFW_BUILD_DOCS OFF CACHE BOOL "Build GLFW documentation" FORCE)
set(GLFW_BUILD_TESTS OFF CACHE BOOL "Build GLFW tests" FORCE)
set(GLFW_BUILD_EXAMPLES OFF CACHE BOOL "Build GLFW examples" FORCE)
set(GLFW_INSTALL OFF CACHE BOOL "Install GLFW" FORCE)

add_subdirectory(third_party/glfw EXCLUDE_FROM_ALL)

find_package(OpenGL REQUIRED)

set_source_files_properties(third_party/tinyfiledialogs/tinyfiledialogs.c PROPERTIES LANGUAGE CXX)
add_subdirectory(third_party/sqlite3 EXCLUDE_FROM_ALL)

add_subdirectory(third_party/googletest EXCLUDE_FROM_ALL)

add_library(imgui STATIC
    third_party/imgui/imgui.cpp
    third_party/imgui/imgui_draw.cpp
    third_party/imgui/imgui_tables.cpp
    third_party/imgui/imgui_widgets.cpp
    third_party/imgui/misc/cpp/imgui_stdlib.cpp
    third_party/imgui/backends/imgui_impl_glfw.cpp
    third_party/imgui/backends/imgui_impl_opengl3.cpp
)
target_include_directories(imgui PUBLIC
    third_party/imgui
    third_party/imgui/backends
)
target_link_libraries(imgui PUBLIC glfw OpenGL::GL)

add_library(md4c STATIC third_party/md4c/src/md4c.c)
target_include_directories(md4c PUBLIC third_party/md4c/src)

# imgui_md still reads the font atlas texture using ImGui's pre-1.92 API.
file(READ "${CMAKE_CURRENT_SOURCE_DIR}/third_party/imgui_md/imgui_md.cpp" IMGUI_MD_SOURCE)
string(REPLACE "\r\n" "\n" IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(REPLACE "Fonts->TexID" "Fonts->TexRef.GetTexID()" IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(REPLACE "dclass; e;" "(void)dclass; (void)e;" IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(FIND "${IMGUI_MD_SOURCE}" "void imgui_md::BLOCK_TABLE(" TABLE_START)
string(FIND "${IMGUI_MD_SOURCE}" "void imgui_md::BLOCK_THEAD" TABLE_END)
string(SUBSTRING "${IMGUI_MD_SOURCE}" 0 ${TABLE_START} IMGUI_MD_PREFIX)
string(LENGTH "${IMGUI_MD_SOURCE}" IMGUI_MD_LENGTH)
math(EXPR IMGUI_MD_SUFFIX_LENGTH "${IMGUI_MD_LENGTH} - ${TABLE_END}")
string(SUBSTRING "${IMGUI_MD_SOURCE}" ${TABLE_END} ${IMGUI_MD_SUFFIX_LENGTH} IMGUI_MD_SUFFIX)
set(IMGUI_MD_TABLE [=[void imgui_md::BLOCK_TABLE(const MD_BLOCK_TABLE_DETAIL* detail, bool e)
{
	if (e) {
		ImGuiTableFlags flags = ImGuiTableFlags_SizingStretchSame;
		if (m_table_border)
			flags |= ImGuiTableFlags_Borders;
		s_imgui_md_table_active = ImGui::BeginTable("##imgui_md_table", detail->col_count, flags);
	} else {
		if (s_imgui_md_table_active)
			ImGui::EndTable();
		s_imgui_md_table_active = false;
	}
}

]=])
set(IMGUI_MD_SOURCE "${IMGUI_MD_PREFIX}${IMGUI_MD_TABLE}${IMGUI_MD_SUFFIX}")
string(REPLACE [=[void imgui_md::BLOCK_TR(bool e)
{
	ImGui::SetCursorPosY(m_table_last_pos.y);

	if (e) {
		m_table_next_column = 0;
		ImGui::NewLine();
		m_table_row_pos.push_back(ImGui::GetCursorPosY());
	}
}]=]
[=[void imgui_md::BLOCK_TR(bool e)
{
	if (e) {
		m_table_next_column = 0;
		const ImGuiTableRowFlags row_flags = m_is_table_header
			? ImGuiTableRowFlags_Headers
			: ImGuiTableRowFlags_None;
		if (s_imgui_md_table_active)
			ImGui::TableNextRow(row_flags);
	}
}]=] IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(FIND "${IMGUI_MD_SOURCE}" "void imgui_md::BLOCK_TD(" CELL_START)
string(SUBSTRING "${IMGUI_MD_SOURCE}" ${CELL_START} -1 CELL_TAIL)
string(FIND "${CELL_TAIL}" "////////////////////////////////////////////////////////////////////////////////" CELL_END_OFFSET)
math(EXPR CELL_END "${CELL_START} + ${CELL_END_OFFSET}")
string(SUBSTRING "${IMGUI_MD_SOURCE}" 0 ${CELL_START} IMGUI_MD_PREFIX)
string(LENGTH "${IMGUI_MD_SOURCE}" IMGUI_MD_LENGTH)
math(EXPR IMGUI_MD_SUFFIX_LENGTH "${IMGUI_MD_LENGTH} - ${CELL_END}")
string(SUBSTRING "${IMGUI_MD_SOURCE}" ${CELL_END} ${IMGUI_MD_SUFFIX_LENGTH} IMGUI_MD_SUFFIX)
set(IMGUI_MD_CELL [=[void imgui_md::BLOCK_TD(const MD_BLOCK_TD_DETAIL*, bool e)
{
	if (e) {
		if (s_imgui_md_table_active)
			ImGui::TableSetColumnIndex(m_table_next_column);
		++m_table_next_column;
	}
}

]=])
set(IMGUI_MD_SOURCE "${IMGUI_MD_PREFIX}${IMGUI_MD_CELL}${IMGUI_MD_SUFFIX}")
string(REPLACE [=[#include "imgui_md.h"]=]
               [=[#include "imgui_md.h"
static bool s_imgui_md_table_active = false;]=]
               IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(REPLACE [=[void imgui_md::render_text(const char* str, const char* str_end)
{]=]
               [=[void imgui_md::render_text(const char* str, const char* str_end)
{
	if (!s_imgui_md_table_active && (m_is_table_header || m_is_table_body))
		return;]=]
               IMGUI_MD_SOURCE "${IMGUI_MD_SOURCE}")
string(FIND "${IMGUI_MD_SOURCE}" "const char* te = str_end;" TEXT_START)
string(FIND "${IMGUI_MD_SOURCE}" "ImGui::TextUnformatted(str, te);" TEXT_END)
string(SUBSTRING "${IMGUI_MD_SOURCE}" 0 ${TEXT_START} IMGUI_MD_PREFIX)
string(LENGTH "${IMGUI_MD_SOURCE}" IMGUI_MD_LENGTH)
math(EXPR IMGUI_MD_SUFFIX_LENGTH "${IMGUI_MD_LENGTH} - ${TEXT_END}")
string(SUBSTRING "${IMGUI_MD_SOURCE}" ${TEXT_END} ${IMGUI_MD_SUFFIX_LENGTH} IMGUI_MD_SUFFIX)
set(IMGUI_MD_TEXT_LAYOUT [=[const char* te = str_end;
		const float width = ImGui::GetContentRegionAvail().x;
		te = ImGui::GetFont()->CalcWordWrapPositionA(scale, str, str_end, width);
		if (te == str)
			++te;

		]=])
set(IMGUI_MD_SOURCE "${IMGUI_MD_PREFIX}${IMGUI_MD_TEXT_LAYOUT}${IMGUI_MD_SUFFIX}")
file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/imgui_md.cpp" "${IMGUI_MD_SOURCE}")

add_library(imgui_md STATIC "${CMAKE_CURRENT_BINARY_DIR}/imgui_md.cpp")
target_include_directories(imgui_md PUBLIC third_party/imgui_md)
target_link_libraries(imgui_md PUBLIC imgui md4c)

add_executable(nadir
    src/main.cpp
    src/base/result.cpp
    src/providers/provider_runtime.cpp
    src/providers/codex_provider.cpp
    src/providers/fake_provider.cpp
    src/application.cpp
    src/persistence/persistent-store.cpp
    src/ui/chat-panel.cpp
    src/ui/dock-area.cpp
    src/ui/threads-panel.cpp
    src/ui/ui-system.cpp
    third_party/tinyfiledialogs/tinyfiledialogs.c
)
target_include_directories(nadir PRIVATE third_party/tinyfiledialogs third_party/sqlite3 third_party/json/include)
target_link_libraries(nadir PRIVATE imgui_md SQLite3)

if(APPLE)
    target_compile_definitions(nadir PRIVATE GL_SILENCE_DEPRECATION)
endif()

if(MSVC)
    target_compile_options(nadir PRIVATE /W4 /permissive-)
else()
    target_compile_options(nadir PRIVATE -Wall -Wextra -Wpedantic)
endif()

include(CTest)
if(BUILD_TESTING)
    add_executable(provider_tests tests/provider_tests.cpp src/base/result.cpp src/providers/provider_runtime.cpp src/providers/codex_provider.cpp src/providers/fake_provider.cpp)
    target_include_directories(provider_tests PRIVATE third_party/json/include)
    target_link_libraries(provider_tests PRIVATE GTest::gtest_main)
    target_compile_options(provider_tests PRIVATE -Wall -Wextra -Wpedantic)
    include(GoogleTest)
    gtest_discover_tests(provider_tests)
endif()
