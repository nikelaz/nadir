mod file_manager;
mod application;
mod page;
mod partial;

use scraper::{Html, Selector};
use std::collections::HashMap;
use crate::application::Application;

fn main() {
  let mut app = Application::new();
  app.init();
}

