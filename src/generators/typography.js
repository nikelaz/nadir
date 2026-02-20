import { FONT_FAMILIES, FONT_WEIGHTS, LETTER_SPACINGS, LINE_HEIGHTS, SIZES } from '../config.js';

const generateFontClasses = function generateFontClasses() {
    let css = '';
    for (const family of FONT_FAMILIES) {
        css += `.font-${family.name} { font-family: ${family.value}; }\n`;
    }
    for (const size of SIZES) {
        css += `.font-${size.name} { font-size: ${size.rem}rem; }\n`;
    }
    for (const weight of FONT_WEIGHTS) {
        css += `.font-${weight.name} { font-weight: ${weight.value}; }\n`;
    }
    return css;
};

const generateTextSpacing = function generateTextSpacing() {
    let css = '';
    for (const lineHeight of LINE_HEIGHTS) {
        css += `.leading-${lineHeight.name} { line-height: ${lineHeight.value}; }\n`;
    }
    for (const letterSpacing of LETTER_SPACINGS) {
        css += `.tracking-${letterSpacing.name} { letter-spacing: ${letterSpacing.value}; }\n`;
    }
    return css;
};

const generateTextAlignTransform = function generateTextAlignTransform() {
    let css = '';
    const alignments = ['left', 'center', 'right', 'justify', 'start', 'end'];
    for (const align of alignments) {
        css += `.text-${align} { text-align: ${align}; }\n`;
    }
    const transforms = ['uppercase', 'lowercase', 'capitalize', 'none'];
    for (const transform of transforms) {
        css += `.text-${transform} { text-transform: ${transform}; }\n`;
    }
    return css;
};

const generateTypography = function generateTypography() {
    return generateFontClasses() + generateTextSpacing() + generateTextAlignTransform();
};

export default generateTypography;
