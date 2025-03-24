use regex::Regex;

#[derive(Debug)]
pub struct Partial {
  pub id: String,
  pub html: String,
}

impl Partial {
  fn find_partials(raw_html: &str) -> Option<Vec<String>> {
    let re = Regex::new(r#"(?s)<template\s+[^>]*?\bdata-partial="[^"]*".*?>.*?<\/template>)"#).unwrap();
    
    re.captures_iter(html)
      .map(|cap| cap[0].to_string())
      .collect()
  }

  fn parse(raw_html: &str) -> Option<(String, String)> {
    let re = Regex::new(r#"(?s)<template(?:\s+[^>]*?\bdata-partial="([^"]*)")?[^>]*>(.*?)<\/template>"#).unwrap();
    
    if let Some(caps) = re.captures(raw_html) {
      let id = caps.get(1).map(|m| m.as_str().to_string()).unwrap_or_default(); 
      let content = caps.get(2).map(|m| m.as_str().to_string()).unwrap_or_default();
      return Some((id, content));
    }
    
    return None;
  }

  pub fn new(raw_html: &str) -> Option<Self> {
    let (id, html) = Partial::parse(raw_html)?;
    return Some(Partial { id, html });
  }
}

