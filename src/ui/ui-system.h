#include <GLFW/glfw3.h>
#include "../base/result.h"
#include "../state/application-state.h"
#include <string>

class UISystem {
private:
  bool m_initialized = false;
  GLFWwindow *m_window = nullptr;
  ApplicationState& m_state;
  std::string m_message_input;

  void new_frame();
  void prepare_backbuffer();
  void prepare_viewport();

public:
  UISystem(GLFWwindow *window, ApplicationState& state);
  Result init();
  void deinit();
  void render_frame_to_backbuffer();
};
