import { FONT_FAMILIES, FONT_WEIGHTS, SIZES, LINE_HEIGHTS, LETTER_SPACINGS } from '../config.js';

export default function generateTypography() {
    let css = '';

    // font-<family>
    for (const family of FONT_FAMILIES) {
        css += `.font-${family.name} { font-family: ${family.value}; }\n`;
    }

    // font-<size>
    for (const size of SIZES) {
        css += `.font-${size.name} { font-size: ${size.rem}rem; }\n`;
    }

    // font-<weight>
    for (const weight of FONT_WEIGHTS) {
        css += `.font-${weight.name} { font-weight: ${weight.value}; }\n`;
    }

    // leading-<size> (line-height)
    for (const lh of LINE_HEIGHTS) {
        css += `.leading-${lh.name} { line-height: ${lh.value}; }\n`;
    }

    // tracking-<size> (letter-spacing)
    for (const ls of LETTER_SPACINGS) {
        css += `.tracking-${ls.name} { letter-spacing: ${ls.value}; }\n`;
    }

    // text-align
    const alignments = ['left', 'center', 'right', 'justify', 'start', 'end'];
    for (const align of alignments) {
        css += `.text-${align} { text-align: ${align}; }\n`;
    }

    // text-transform
    const transforms = ['uppercase', 'lowercase', 'capitalize', 'none'];
    for (const transform of transforms) {
        css += `.text-${transform} { text-transform: ${transform}; }\n`;
    }

    return css;
}
