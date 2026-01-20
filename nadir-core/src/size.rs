#[derive(Debug, Clone, Copy)]
pub enum Size {
    XXXS,
    XXS,
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL,
    XXXL,
}

impl Size {
    pub const ALL: [Size; 9] = [
        Size::XXXS,
        Size::XXS,
        Size::XS,
        Size::SM,
        Size::MD,
        Size::LG,
        Size::XL,
        Size::XXL,
        Size::XXXL,
    ];

    pub fn as_str(self) -> &'static str {
        match self {
            Size::XXXS => "3xs",
            Size::XXS  => "2xs",
            Size::XS   => "xs",
            Size::SM   => "sm",
            Size::MD   => "md",
            Size::LG   => "lg",
            Size::XL   => "xl",
            Size::XXL  => "2xl",
            Size::XXXL => "3xl",
        }
    }
}
