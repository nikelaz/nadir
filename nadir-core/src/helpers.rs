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
