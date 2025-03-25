mod file_manager;

use scraper::{Html, Selector};
use std::collections::HashMap;
use crate::file_manager::FileManager;

fn main() {
  FileManager::read_html_files();

  let doc = r#"
    <html>
      <head>
        <title>Test</title>
      </head>
      <body>    
        <slot data-partial="header"></slot>  
        <p>Page Content</p>
        <slot data-partial="footer"></slot>
      </body>
    </html>
  "#;

  let html = r#"
    <template data-partial="header">
      <header>
        <h1>Page Header</h1>
      </header>
    </template>

    <template data-partial="footer">
      <footer>
        <h2>Footer Content</h2>
      </footer>
    </template>
  "#;


  let mut document = Html::parse_document(doc);
  let part_fragment = Html::parse_fragment(html);

  let template_sel = Selector::parse("template[data-partial]").unwrap();
  let slot_sel = Selector::parse("slot[data-partial]").unwrap();

  // Store templates in a hashmap for quick lookup
  let mut templates = HashMap::new();

  for element in part_fragment.select(&template_sel) {
    if let Some(partial_name) = element.value().attr("data-partial") {
      templates.insert(partial_name.to_string(), element.inner_html());
    }
  }

  // Collect slot replacements without modifying the document inside the loop
  let mut modified_html = document.root_element().html();

  for slot_el in document.select(&slot_sel) {
    if let Some(partial_name) = slot_el.value().attr("data-partial") {
      if let Some(template_content) = templates.get(partial_name) {
        let slot_html = slot_el.html();
        modified_html = modified_html.replace(&slot_html, template_content);
      }
    }
  }

  // Re-parse the modified document
  document = Html::parse_document(&modified_html);

  println!("{}", document.root_element().html());
}

