#[derive(Debug, Clone, Copy)]
pub enum Size {
    XXXS,
    XXS,
    XS,
    S,
    M,
    L,
    XL,
    XXL,
    XXXL,
}

impl Size {
    pub const ALL: [Size; 9] = [
        Size::XXXS,
        Size::XXS,
        Size::XS,
        Size::S,
        Size::M,
        Size::L,
        Size::XL,
        Size::XXL,
        Size::XXXL,
    ];

    pub fn as_str(self) -> &'static str {
        match self {
            Size::XXXS => "3xs",
            Size::XXS  => "2xs",
            Size::XS   => "xs",
            Size::S    => "s",
            Size::M    => "m",
            Size::L    => "l",
            Size::XL   => "xl",
            Size::XXL  => "2xl",
            Size::XXXL => "3xl",
        }
    }
}
