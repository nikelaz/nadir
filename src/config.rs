use std::fs;
use std::path::Path;
use serde_json::Value;

#[derive(Debug)]
pub struct Config {
  pub input_dir: String,
  pub output_dir: String,
}

impl Config {
  pub fn load() -> Self {
    let config_file_contents = fs::read_to_string("example/nadir.config.json")
      .expect("Could not find a config file. Nadir expects a \"nadir.config.json\" file in the root directory");

    let v: Value = serde_json::from_str(&config_file_contents)    
      .expect("Could not parse the config file. JSON syntax error");

    // Provide default values if the fields are missing or invalid
    let input_dir = v["inputDir"].as_str().unwrap_or("dist").to_string();
    let output_dir = v["outputDir"].as_str().unwrap_or("src").to_string();

    if !Path::new(&input_dir).exists() {
      panic!("Configured input directory (inputDir) '{}' does not exist", input_dir);
    }
    
    Config { input_dir, output_dir }
  }
}
