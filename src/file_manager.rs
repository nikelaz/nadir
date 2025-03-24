use std::fs;
use walkdir::WalkDir;

pub struct FileManager;

impl FileManager {
  pub fn read_html_files() {
    let dir = "./example";

    for entry in WalkDir::new(dir).into_iter().filter_map(Result::ok) {
      if entry.file_type().is_file() {
        let path = entry.path();
        let filename = path.file_name().unwrap_or_default().to_string_lossy();
        let extension = path.extension().unwrap_or_default().to_string_lossy();

        if extension == "html" {
          println!("Found HTML file: {}", path.display()); 
        }
      }
    }
  }
}

