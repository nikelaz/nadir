export default function generateLayout() {
    let css = '';

    // stack-x
    css += `.stack-x { display: flex; flex-direction: row; }\n`;

    // stack-y
    css += `.stack-y { display: flex; flex-direction: column; }\n`;

    // stack-z
    css += `.stack-z { display: grid; }\n.stack-z > * { grid-area: 1 / 1; }\n`;

    return css;
}
