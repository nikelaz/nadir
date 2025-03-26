use minify_html_onepass::{Cfg, in_place_str};

pub struct HTMLUtils;

impl HTMLUtils {
  pub fn minify(html: &mut str) -> String {
    let cfg = &Cfg {
      minify_js: false,
      minify_css: false,
    };

    return in_place_str(html, cfg)      
      .expect("Error minifying the output html")
      .to_string();
  }
}

