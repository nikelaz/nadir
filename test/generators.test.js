import assert from 'node:assert/strict';
import {
    DIRECTIONS,
    FONT_FAMILIES,
    FONT_WEIGHTS,
    LETTER_SPACINGS,
    LINE_HEIGHTS,
    SIZES
} from '../src/config.js';
import generateRoundness from '../src/generators/roundness.js';
import generateSpacing from '../src/generators/spacing.js';
import generateTypography from '../src/generators/typography.js';
import test from 'node:test';

const testFontStyles = function testFontStyles(css) {
    for (const family of FONT_FAMILIES) {
        assert.ok(css.includes(`.font-${family.name} { font-family: ${family.value}; }`), `Should generate .font-${family.name}`);
    }
    for (const size of SIZES) {
        assert.ok(css.includes(`.font-${size.name} { font-size: ${size.rem}rem; }`), `Should generate .font-${size.name}`);
    }
    for (const weight of FONT_WEIGHTS) {
        assert.ok(css.includes(`.font-${weight.name} { font-weight: ${weight.value}; }`), `Should generate .font-${weight.name}`);
    }
};

const testTextSpacing = function testTextSpacing(css) {
    for (const lineHeights of LINE_HEIGHTS) {
        assert.ok(css.includes(`.leading-${lineHeights.name} { line-height: ${lineHeights.value}; }`), `Should generate .leading-${lineHeights.name}`);
    }
    for (const letterSpacings of LETTER_SPACINGS) {
        assert.ok(css.includes(`.tracking-${letterSpacings.name} { letter-spacing: ${letterSpacings.value}; }`), `Should generate .tracking-${letterSpacings.name}`);
    }
};

test('typography generator creates configured classes', () => {
    const css = generateTypography();
    testFontStyles(css);
    testTextSpacing(css);
});

const testSpacingDirectional = function testSpacingDirectional(css, direction, size) {
    if (direction === 'x') {
        assert.ok(css.includes(`.margin-x-${size.name} { margin-left: ${size.rem}rem; margin-right: ${size.rem}rem; }`));
        assert.ok(css.includes(`.padding-x-${size.name} { padding-left: ${size.rem}rem; padding-right: ${size.rem}rem; }`));
    } else if (direction === 'y') {
        assert.ok(css.includes(`.margin-y-${size.name} { margin-top: ${size.rem}rem; margin-bottom: ${size.rem}rem; }`));
        assert.ok(css.includes(`.padding-y-${size.name} { padding-top: ${size.rem}rem; padding-bottom: ${size.rem}rem; }`));
    } else {
        assert.ok(css.includes(`.margin-${direction}-${size.name} { margin-${direction}: ${size.rem}rem; }`));
        assert.ok(css.includes(`.padding-${direction}-${size.name} { padding-${direction}: ${size.rem}rem; }`));
    }
};

test('spacing generator creates configured classes', () => {
    const css = generateSpacing();

    for (const size of SIZES) {
        assert.ok(css.includes(`.margin-${size.name} { margin: ${size.rem}rem; }`));
        assert.ok(css.includes(`.padding-${size.name} { padding: ${size.rem}rem; }`));
        assert.ok(css.includes(`.gap-${size.name} { gap: ${size.rem}rem; }`));

        for (const dir of DIRECTIONS) {
            testSpacingDirectional(css, dir, size);
        }
    }
});

test('roundness generator creates configured classes', () => {
    const css = generateRoundness();

    assert.ok(css.includes(`.round-none { border-radius: 0px; }`));
    assert.ok(css.includes(`.round-full { border-radius: 9999px; }`));
    assert.ok(css.includes(`.round-circle { border-radius: 50%; }`));

    const mdSize = SIZES.find(size => size.name === 'md');
    assert.ok(css.includes(`.round { border-radius: ${mdSize.rem}rem; }`));

    for (const size of SIZES) {
        assert.ok(css.includes(`.round-${size.name} { border-radius: ${size.rem}rem; }`));
    }
});
