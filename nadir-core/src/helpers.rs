use std::fs::File;
use std::io::Write;
use std::error::Error;
use lightningcss::stylesheet::{StyleSheet, PrinterOptions, ParserOptions};

pub fn dedent(s: &str) -> String {
    let lines: Vec<&str> = s.lines().collect();
    let indent = lines
        .iter()
        .filter(|l| !l.trim().is_empty())
        .map(|l| l.chars().take_while(|c| c.is_whitespace()).count())
        .min()
        .unwrap_or(0);

    lines
        .iter()
        .map(|l| l.chars().skip(indent).collect::<String>())
        .collect::<Vec<_>>()
        .join("\n")
}

pub fn minify_css(input: &str) -> String {
    let sheet = StyleSheet::parse(&input, ParserOptions::default()).unwrap();
    let minified = sheet.to_css(PrinterOptions { minify: true, ..Default::default() }).unwrap();
    minified.code
}

pub fn save_text_file(dist_dir: &str, file_name: &str, content: &str) -> Result<usize, Box<dyn Error>> {
    let dest_file_path_min = format!("{}/{}", dist_dir, file_name);
    let mut file_min = File::create(&dest_file_path_min)?;
    let bytes = content.as_bytes();
    file_min.write_all(bytes)?;
    Ok(bytes.len())
}
