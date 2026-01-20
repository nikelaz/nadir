#[derive(Debug, Clone, Copy)]
pub enum Direction {
    Top,
    Right,
    Bottom,
    Left,
    X,
    Y,
}

impl Direction {
    pub const ALL: [Direction; 6] = [
        Direction::Top,
        Direction::Right,
        Direction::Bottom,
        Direction::Left,
        Direction::X,
        Direction::Y,
    ];

    pub fn as_str(self) -> &'static str {
        match self {
            Direction::Top    => "top",
            Direction::Right  => "right",
            Direction::Bottom => "bottom",
            Direction::Left   => "left",
            Direction::X      => "x",
            Direction::Y      => "y",
        }
    }
}
