mod file_manager;
mod application;
mod page;
mod partial;
mod config;
mod html_utils;

use crate::application::Application;

fn main() {
  let mut app = Application::new();
  app.init();
}

