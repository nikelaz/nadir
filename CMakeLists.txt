cmake_minimum_required(VERSION 3.24)

project(AgentHarness VERSION 0.1.0 LANGUAGES CXX)

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

add_library(imgui STATIC
    third_party/imgui/imgui.cpp
    third_party/imgui/imgui_draw.cpp
    third_party/imgui/imgui_tables.cpp
    third_party/imgui/imgui_widgets.cpp
    third_party/imgui/backends/imgui_impl_glfw.cpp
    third_party/imgui/backends/imgui_impl_opengl3.cpp
)
target_include_directories(imgui PUBLIC
    third_party/imgui
    third_party/imgui/backends
)
target_link_libraries(imgui PUBLIC glfw OpenGL::GL)

add_executable(nadir
    src/main.cpp
    src/base/result.cpp
    src/application.cpp
    src/ui/chat-panel.cpp
    src/ui/dock-area.cpp
    src/ui/threads-panel.cpp
    src/ui/ui-system.cpp
    third_party/tinyfiledialogs/tinyfiledialogs.c
)
target_include_directories(nadir PRIVATE third_party/tinyfiledialogs)
target_link_libraries(nadir PRIVATE imgui glfw OpenGL::GL)

if(APPLE)
    target_compile_definitions(nadir PRIVATE GL_SILENCE_DEPRECATION)
endif()

if(MSVC)
    target_compile_options(nadir PRIVATE /W4 /permissive-)
else()
    target_compile_options(nadir PRIVATE -Wall -Wextra -Wpedantic)
endif()
