use std::time::Instant;
use std::fs::{self, File};
use std::io::{self, Write};
use helpers::minify_css;

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

    let dest_file_path = format!("{}/nadir.css", DIST_DIR);
    let mut file = File::create(&dest_file_path)?;
    file.write_all(bundle_css.trim().as_bytes())?;
    println!("Created: {}", dest_file_path);

    let dest_file_path_min = format!("{}/nadir.min.css", DIST_DIR);
    let mut file_min = File::create(&dest_file_path_min)?;
    file_min.write_all(minify_css(bundle_css.trim()).as_bytes())?;
    println!("Created: {}", dest_file_path_min);

    let elapsed = start.elapsed();
    println!("Execution time: {:.2?}", elapsed);
    Ok(())
}
