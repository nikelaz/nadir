use std::fs;
use walkdir::WalkDir;

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
          partial_paths.push(path.display().to_string().replace("\\", "/"));
        }

        if extension == "html" && !filename.contains("partial") {
          page_paths.push(path.display().to_string().replace("\\", "/"));
        }
      }
    }

    return (page_paths, partial_paths);
  }
}

