#ifndef CHAT_PANEL_H
#define CHAT_PANEL_H
#include "../providers/provider.h"
#include "../state/application-state.h"
#include <string>
void render_chat_panel(ApplicationState& state, std::string& message_input, Provider& provider,
                       std::string& selected_model, std::string& selected_reasoning_effort,
                       const std::string& progress_text, const std::string& progress_conversation_id);
#endif
