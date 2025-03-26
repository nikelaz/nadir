use std::fs;
use std::collections::HashMap;
use colored::Colorize;
use scraper::{Html, Selector};
use crate::file_manager::FileManager;
use crate::page::Page;
use crate::partial::Partial;
use crate::config::Config;
use crate::html_utils::HTMLUtils;

#[derive(Debug)]
pub struct Application {
  config: Config,
  pub pages: Vec<Page>,
  pub partials: Vec<Partial>,
  pub partials_map: HashMap<String, Partial>,
}

impl Application {
  pub fn new() -> Self {
    return Application {
      config: Config { input_dir: "".to_string(), output_dir: "".to_string() },
      pages: Vec::new(),
      partials: Vec::new(),
      partials_map: HashMap::new(), 
    }
  }

  fn load_pages(&mut self, page_paths: &Vec<String>) {
    for page_path in page_paths {
      let html = match fs::read_to_string(page_path) {
        Ok(res) => res,
        Err(err) => panic!("Error reading page {}: {}", page_path, err),
      };

      let page = Page::new(page_path, html.as_str());
      self.pages.push(page);
    }
  }

  fn load_partials(&mut self, partial_paths: &Vec<String>) {
    for partial_path in partial_paths {
      let html = match fs::read_to_string(partial_path) {
        Ok(res) => res,
        Err(err) => panic!("Error reading partial {}: {}", partial_path, err),
      };
      let partials = Partial::parse_partials(html.as_str());
      for partial in &partials {
        self.partials_map.insert(partial.id.to_string(), partial.clone()); 
      }
      self.partials.extend(partials);
    }
  }

  fn insert_partials(&mut self) {
    let slot_sel = Selector::parse("slot[data-partial]")
      .expect("Internal Error: Could not parse slot selector");

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
      page.html = HTMLUtils::minify(&mut modified_html);
    }
  }

  pub fn init(&mut self) {
    println!("{}", "Loading Config...".cyan());
    self.config = Config::load();

    println!("{} {}", "Input Dir:".cyan(), self.config.input_dir);
    println!("{} {}", "Output Dir:".cyan(), self.config.output_dir);

    println!("{}", "Loading Files...".cyan());
    let (page_paths, partial_paths, other_paths) = FileManager::find_file_paths(&self.config.input_dir);

    println!("{} {}", "Pages:".cyan(), page_paths.len());
    println!("{} {}", "Partials:".cyan(), partial_paths.len());
    println!("{} {}", "Other Files:".cyan(), other_paths.len());

    self.load_pages(&page_paths); 
    self.load_partials(&partial_paths);
    self.insert_partials();
    FileManager::save_output_files(&self.config.input_dir, &self.config.output_dir, &self.pages, &other_paths);
  }
}

