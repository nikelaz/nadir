use std::time::Instant;
use std::fs::{self, File};
use std::io::{self, Write};
use helpers::dedent;

mod helpers;

const DIST_DIR: &str = "dist";

fn main() -> io::Result<()> {
    let start = Instant::now();

    fs::create_dir_all(DIST_DIR)?;

    let content = dedent(r#"
        body {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
        }

        :root {
            background: red;
        }
    "#);

    let mut file = File::create(format!("{}/nadir.css", DIST_DIR))?;
    file.write_all(content.trim().as_bytes())?;

    let elapsed = start.elapsed();
    println!("Execution time: {:.2?}", elapsed);
    Ok(())
}
