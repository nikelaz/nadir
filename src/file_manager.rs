use std::fs;
use std::path::Path;
use walkdir::WalkDir;
use colored::Colorize;
use crate::page::Page;
use dunce::canonicalize;

pub struct FileManager;

impl FileManager {
  pub fn find_file_paths(dir: &str) -> (Vec<String>, Vec<String>, Vec<String>) {
    let dir_path = canonicalize(dir)
      .expect("Failed to resolve input directory path");

    let mut page_paths: Vec<String> = Vec::new();
    let mut partial_paths: Vec<String> = Vec::new();
    let mut other_paths: Vec<String> = Vec::new();

    for entry in WalkDir::new(&dir_path).into_iter().filter_map(Result::ok) {
      if entry.file_type().is_file() {
        let path = entry.path();
        let filename = path.file_name().unwrap_or_default().to_string_lossy();
        let extension = path.extension().unwrap_or_default().to_string_lossy();
        let path_string = path
          .to_str()
          .expect("Error parsing one of the paths. Check your file names for special symbols.")
          .to_string();      

        if extension == "html" && filename.contains("partial") {
          partial_paths.push(path_string);
          continue;
        }

        if extension == "html" {
          page_paths.push(path_string);
          continue;
        }

        other_paths.push(path_string);
      }
    }
    
    return (page_paths, partial_paths, other_paths);
  }

  pub fn save_output_files(input_dir: &str, output_dir: &str, pages: &Vec<Page>, other_paths: &Vec<String>) {
    for page in pages {
      let path = canonicalize(page.path.clone().replace(input_dir, output_dir))
        .expect("Failed to resolve output directory path");
        
      // Get the parent directory and create it if it doesn't exist
      if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)
          .expect("Error creating directory");
      }
    
      let _ = fs::write(&path, page.html.clone());
      println!("{} {}", "Creating Page:".cyan(), path.display());
    }

    for old_other_path in other_paths {
      let new_other_path = canonicalize(old_other_path.clone().replace(input_dir, output_dir))
        .expect("Failed to resolve output directory path");
      
      // Get the parent directory and create it if it doesn't exist
      if let Some(parent) = Path::new(&old_other_path).parent() {
        fs::create_dir_all(parent)
          .expect("Error creating directory");
      }

      let _ = fs::copy(old_other_path, &new_other_path);
      
      println!("{} {}", "Copying:".cyan(), new_other_path.display());
    }
  }
}

