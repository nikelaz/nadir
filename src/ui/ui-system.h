#include "../base/result.h"
#include "../providers/provider.h"
#include "../state/application-state.h"
#include <GLFW/glfw3.h>
#include <string>

class UISystem {
private:
    bool m_initialized = false;
    GLFWwindow* m_window = nullptr;
    ApplicationState& m_state;
    Provider& m_provider;
    std::string m_message_input;
    std::string m_selected_model;
    std::string m_selected_reasoning_effort;
    std::string m_progress_text;
    std::string m_progress_conversation_id;

    void new_frame();
    void prepare_backbuffer();
    void prepare_viewport();

public:
    UISystem(GLFWwindow* window, ApplicationState& state, Provider& provider);
    Result init();
    void deinit();
    void render_frame_to_backbuffer();
};
