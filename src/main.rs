mod file_manager;

use std::fs;
use regex::Regex;
use std::collections::HashMap;
use crate::file_manager::FileManager;

fn main() {
  println!("Hello, world!");

  /*
  let index = fs::read_to_string("example/index.html").unwrap();
  let partial = fs::read_to_string("example/index.partial.html").unwrap();

  let partials = Partial::find_partials(partial.as_str());
 
  let partial = Partial::new(partial.as_str()).unwrap();

  println!("{:?}", partials);
*/
  FileManager::read_html_files();
  /*
  let index = replace_slot_tags(index.as_str(), my_replacement_fn);

  println!("index: \n{}", index);
  */
}
