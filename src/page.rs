use scraper::Html;

#[derive(Debug, Clone)]
pub struct Page {
  pub path: String,
  pub html: String,
  pub document: Html
}

impl Page {
  pub fn new(path: &str, html: &str) -> Self {
    return Page {
      path: path.to_string(),
      html: html.to_string(),
      document: Html::parse_document(html),
    };
  }
}

