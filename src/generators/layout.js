export default function generateLayout() {
    let css = '';

    // Stack-x
    css += `.stack-x { display: flex; flex-direction: row; }\n`;

    // Stack-y
    css += `.stack-y { display: flex; flex-direction: column; }\n`;

    // Stack-z
    css += `.stack-z { display: grid; }\n.stack-z > * { grid-area: 1 / 1; }\n`;

    return css;
}
