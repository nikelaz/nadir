use scraper::{Html, Selector};

#[derive(Debug, Clone)]
pub struct Partial {
  pub id: String,
  pub html: String,
}

impl Partial {
  pub fn new(id: &str, html: &str) -> Self {
    return Partial {
      id: id.to_string(),
      html: html.to_string(),
    };
  }

  pub fn parse_partials(raw_html: &str) -> Vec<Self> {
    let fragment = Html::parse_fragment(raw_html);
    let template_sel = Selector::parse("template[data-partial]")
      .expect("Internal Error: Could not parse slot selector");

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

