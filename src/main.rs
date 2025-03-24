mod partial;

use std::fs;
use regex::Regex;
use partial::Partial;
use std::collections::HashMap;

fn main() {
  println!("Hello, world!");

  let index = fs::read_to_string("example/index.html").unwrap();
  let partial = fs::read_to_string("example/index.partial.html").unwrap();

  let partials = Partial::find_partials(partial.as_str());
 
  let partial = Partial::new(partial.as_str()).unwrap();

  println!("{:?}", partials);

  /*
  let index = replace_slot_tags(index.as_str(), my_replacement_fn);

  println!("index: \n{}", index);
  */
}
