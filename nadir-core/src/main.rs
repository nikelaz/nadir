use std::time::Instant;
use std::fs;
use std::io;
use helpers::{minify_css, save_text_file};

mod helpers;
mod size;
mod direction;
mod units;
mod spacing;

const DIST_DIR: &str = "dist";

fn main() -> io::Result<()> {
    let start = Instant::now();

    fs::create_dir_all(DIST_DIR)?;

    let mut bundle_css = String::new();

    let spacing_css = spacing::generate();
    bundle_css.push_str(spacing_css.as_str());

    match save_text_file(DIST_DIR, "nadir-spacing.css", spacing_css.trim()) {
        Ok(file_size) => println!("Created: nadir-spacing.css ({} bytes)", file_size),
        Err(err) => eprintln!("Error: Could not create the nadir-spacing.css file:\n{}", err)
    }

    match save_text_file(DIST_DIR, "nadir-spacing.min.css", minify_css(spacing_css.trim()).as_str()) {
        Ok(file_size) => println!("Created: nadir-spacing.min.css ({} bytes)", file_size),
        Err(err) => eprintln!("Error: Could not create the nadir-spacing.min.css file:\n{}", err)
    }

    match save_text_file(DIST_DIR, "nadir.css", bundle_css.trim()) {
        Ok(file_size) => println!("Created: nadir.css ({} bytes)", file_size),
        Err(err) => eprintln!("Error: Could not create the nadir.css file:\n{}", err)
    }

    match save_text_file(DIST_DIR, "nadir.min.css", minify_css(bundle_css.trim()).as_str()) {
        Ok(file_size) => println!("Created: nadir.min.css ({} bytes)", file_size),
        Err(err) => eprintln!("Error: Could not create the nadir.min.css file:\n{}", err)
    }

    let elapsed = start.elapsed();
    println!("Execution time: {:.2?}", elapsed);
    Ok(())
}
