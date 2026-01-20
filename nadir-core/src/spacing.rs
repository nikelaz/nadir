use crate::units::to_em;
use crate::size::Size;
use crate::direction::Direction;
use crate::helpers::dedent;

fn size_to_space(input: Size) -> String {
    match input {
        Size::XXXS => to_em(0.1),
        Size::XXS  => to_em(0.25),
        Size::XS   => to_em(0.5),
        Size::S    => to_em(0.75),
        Size::M    => to_em(1.0),
        Size::L    => to_em(1.25),
        Size::XL   => to_em(1.5),
        Size::XXL  => to_em(1.75),
        Size::XXXL => to_em(2.0),
    }
}

pub fn generate() -> String {
    let mut content = String::new();

    // .margin-<size>
    for size in Size::ALL {
        let rule = format!(r#"
                .margin-{} {{
                    margin-top: {};
                }}
            "#,
            size.as_str(),
            size_to_space(size)
        );
        content.push_str(
            dedent(rule.as_str()).as_str()
        );
    }

    // .margin-<direction>-<size>
    for direction in Direction::ALL {
        for size in Size::ALL {
            let rule = format!(r#"
                    .margin-{}-{} {{
                        margin-top: {};
                    }}
                "#,
                direction.as_str(),
                size.as_str(),
                size_to_space(size)
            );
            content.push_str(
                dedent(rule.as_str()).as_str()
            );
        }
    }

    // padding-<size>
    for size in Size::ALL {
        let rule = format!(r#"
                .padding-{} {{
                    padding-top: {};
                }}
            "#,
            size.as_str(),
            size_to_space(size)
        );
        content.push_str(
            dedent(rule.as_str()).as_str()
        );
    }

    // padding-<direction>-<size>
    for direction in Direction::ALL {
        for size in Size::ALL {
            let rule = format!(r#"
                    .padding-{}-{} {{
                        padding-top: {};
                    }}
                "#,
                direction.as_str(),
                size.as_str(),
                size_to_space(size)
            );
            content.push_str(
                dedent(rule.as_str()).as_str()
            );
        }
    }

    return content;
}
