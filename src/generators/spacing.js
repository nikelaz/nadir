import { DIRECTIONS, SIZES } from '../config.js';

const generateMargin = function generateMargin() {
    let css = '';
    for (const size of SIZES) {
        css += `.margin-${size.name} { margin: ${size.rem}rem; }\n`;
    }
    for (const direction of DIRECTIONS) {
        for (const size of SIZES) {
            if (direction === 'x') {
                css += `.margin-x-${size.name} { margin-left: ${size.rem}rem; margin-right: ${size.rem}rem; }\n`;
            } else if (direction === 'y') {
                css += `.margin-y-${size.name} { margin-top: ${size.rem}rem; margin-bottom: ${size.rem}rem; }\n`;
            } else {
                css += `.margin-${direction}-${size.name} { margin-${direction}: ${size.rem}rem; }\n`;
            }
        }
    }
    return css;
};

const generatePadding = function generatePadding() {
    let css = '';
    for (const size of SIZES) {
        css += `.padding-${size.name} { padding: ${size.rem}rem; }\n`;
    }
    for (const direction of DIRECTIONS) {
        for (const size of SIZES) {
            if (direction === 'x') {
                css += `.padding-x-${size.name} { padding-left: ${size.rem}rem; padding-right: ${size.rem}rem; }\n`;
            } else if (direction === 'y') {
                css += `.padding-y-${size.name} { padding-top: ${size.rem}rem; padding-bottom: ${size.rem}rem; }\n`;
            } else {
                css += `.padding-${direction}-${size.name} { padding-${direction}: ${size.rem}rem; }\n`;
            }
        }
    }
    return css;
};

const generateGap = function generateGap() {
    let css = '';
    for (const size of SIZES) {
        css += `.gap-${size.name} { gap: ${size.rem}rem; }\n`;
    }
    for (const size of SIZES) {
        css += `.gap-x-${size.name} { column-gap: ${size.rem}rem; }\n`;
    }
    for (const size of SIZES) {
        css += `.gap-y-${size.name} { row-gap: ${size.rem}rem; }\n`;
    }
    return css;
};

const generateSpacing = function generateSpacing() {
    return generateMargin() + generatePadding() + generateGap();
};

export default generateSpacing;
