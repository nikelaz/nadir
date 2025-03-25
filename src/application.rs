use std::fs;
use std::collections::HashMap;
use crate::file_manager::FileManager;
use crate::page::Page;
use crate::partial::Partial;
use scraper::{Html, Selector};

#[derive(Debug)]
pub struct Application {
  pub pages: Vec<Page>,
  pub partials: Vec<Partial>,
  pub partials_map: HashMap<String, Partial>,
}

impl Application {
  pub fn new() -> Self {
    return Application {
      pages: Vec::new(),
      partials: Vec::new(),
      partials_map: HashMap::new(),
    }
  }

  fn load_pages(&mut self, page_paths: &Vec<String>) {
    for page_path in page_paths {
      let html = fs::read_to_string(page_path).unwrap();
      let page = Page::new(page_path, html.as_str());
      self.pages.push(page);
    }
  }

  fn load_partials(&mut self, partial_paths: &Vec<String>) {
    for partial_path in partial_paths {
      let html = fs::read_to_string(partial_path).unwrap();
      let partials = Partial::parse_partials(html.as_str());
      for partial in &partials {
        self.partials_map.insert(partial.id.to_string(), partial.clone()); 
      }
      self.partials.extend(partials);
    }
  }

  fn insert_partials(&mut self) {
    let slot_sel = Selector::parse("slot[data-partial]").unwrap();

    for page in &mut self.pages {
      let mut modified_html = page.document.root_element().html();

      for slot_el in page.document.select(&slot_sel) {
        if let Some(partial_name) = slot_el.value().attr("data-partial") {
          if let Some(partial) = self.partials_map.get(partial_name) {
            let slot_html = slot_el.html();
            modified_html = modified_html.replace(&slot_html, partial.html.as_str());
          }
        }
      }

      page.document = Html::parse_document(&modified_html);
    }
  }

  pub fn init(&mut self) {
    let (page_paths, partial_paths) = FileManager::find_file_paths("example");
    self.load_pages(&page_paths); 
    self.load_partials(&partial_paths);
    self.insert_partials();
  }
}

