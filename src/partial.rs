use scraper::{Html, Selector};

#[derive(Debug, Clone)]
pub struct Partial {
  pub id: String,
  pub html: String,
  pub fragment: Html,
}

impl Partial {
  pub fn new(id: &str, html: &str) -> Self {
    return Partial {
      id: id.to_string(),
      html: html.to_string(),
      fragment: Html::parse_fragment(html)
    };
  }

  pub fn parse_partials(raw_html: &str) -> Vec<Self> {
    let fragment = Html::parse_fragment(raw_html);
    let template_sel = Selector::parse("template[data-partial]").unwrap();
    let mut partials: Vec<Self> = Vec::new();

    for element in fragment.select(&template_sel) {
      if let Some(partial_name) = element.value().attr("data-partial") {
        let partial = Partial::new(partial_name, element.inner_html().as_str());
        partials.push(partial);
      }
    }

    return partials;
  }
}

