use std::fs;
use std::path::Path;
use walkdir::WalkDir;
use colored::Colorize;
use crate::page::Page;

pub struct FileManager;

impl FileManager {
  pub fn find_file_paths(dir: &str) -> (Vec<String>, Vec<String>) {
    let mut page_paths: Vec<String> = Vec::new();
    let mut partial_paths: Vec<String> = Vec::new();

    for entry in WalkDir::new(dir).into_iter().filter_map(Result::ok) {
      if entry.file_type().is_file() {
        let path = entry.path();
        let filename = path.file_name().unwrap_or_default().to_string_lossy();
        let extension = path.extension().unwrap_or_default().to_string_lossy();

        if extension == "html" && filename.contains("partial") {
          let partial_path = path
            .to_str()
            .expect("Error parsing one of the partial paths. Check your file names for special symbols.")
            .to_string();
           
          partial_paths.push(partial_path);

          continue;
        }

        if extension == "html" {
          let page_path = path
            .to_str()
            .expect("Error parsing one of the page paths. Check your file names for special symbols.")
            .to_string();

          page_paths.push(page_path);
        }
      }
    }
    
    return (page_paths, partial_paths);
  }

  pub fn save_output_files(input_dir: &str, output_dir: &str, pages: &Vec<Page>) {
    for page in pages {
      let path = page.path.clone().replace(input_dir, output_dir);
      
      // Get the parent directory and create it if it doesn't exist
      if let Some(parent) = Path::new(&path).parent() {
        fs::create_dir_all(parent)
          .expect("Error creating directory");
      }
    
      let _ = fs::write(&path, page.html.clone());
      println!("{} {}", "Creating Page:".cyan(), path);
    }
  }
}

