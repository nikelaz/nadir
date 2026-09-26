#include <GLFW/glfw3.h>
#include "../base/result.h"
#include "ui-state.h"

class UISystem {
private:
  bool m_initialized = false;
  GLFWwindow *m_window = nullptr;
  UIState m_state;

  void new_frame();
  void prepare_backbuffer();
  void prepare_viewport();

public:
  UISystem(GLFWwindow *window);
  Result init();
  void deinit();
  void render_frame_to_backbuffer();
};
