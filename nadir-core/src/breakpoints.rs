#[derive(Debug, Clone, Copy)]
pub enum Breakpoints {
    SM,
    MD,
    LG,
    XL,
    XXL,
}

impl Breakpoints {
    pub const ALL: [Size; 9] = [
        Breakpoints::SM,
        Breakpoints::MD,
        Breakpoints::LG,
        Breakpoints::XL,
        Breakpoints::XXL,
    ];

    pub fn as_str(self) -> &'static str {
        match self {
            Breakpoints::S    => "sm",
            Breakpoints::M    => "md",
            Breakpoints::L    => "lg",
            Breakpoints::XL   => "xl",
            Breakpoints::XXL  => "2xl",
        }
    }
}
