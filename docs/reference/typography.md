# Typography

The typography bundle provides classes for font families, font sizes, font weights, line heights, letter spacing, text alignment, and text transforms.

## Import

```js
import '@nikelaz/nadir/dist/nadir-typography.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## Font Family

These classes reference CSS custom properties. Set `--nadir-ff-base` and `--nadir-ff-display` in your own stylesheet to control which fonts are used.

| Class | CSS Variable |
|-------|-------------|
| `.font-base` | `var(--nadir-ff-base)` |
| `.font-display` | `var(--nadir-ff-display)` |

## Font Size

| Class | Value |
|-------|-------|
| `.font-3xs` | 0.1rem |
| `.font-2xs` | 0.25rem |
| `.font-xs` | 0.5rem |
| `.font-sm` | 0.75rem |
| `.font-md` | 1rem |
| `.font-lg` | 1.25rem |
| `.font-xl` | 1.5rem |
| `.font-2xl` | 1.75rem |
| `.font-3xl` | 2rem |

## Font Weight

| Class | `font-weight` |
|-------|--------------|
| `.font-thin` | 200 |
| `.font-light` | 300 |
| `.font-regular` | 400 |
| `.font-medium` | 500 |
| `.font-semibold` | 600 |
| `.font-bold` | 700 |
| `.font-black` | 900 |

## Line Height

| Class | `line-height` |
|-------|--------------|
| `.leading-none` | 1 |
| `.leading-tight` | 1.25 |
| `.leading-snug` | 1.375 |
| `.leading-normal` | 1.5 |
| `.leading-relaxed` | 1.625 |
| `.leading-loose` | 2 |

## Letter Spacing

| Class | `letter-spacing` |
|-------|-----------------|
| `.tracking-tighter` | -0.05em |
| `.tracking-tight` | -0.025em |
| `.tracking-normal` | 0em |
| `.tracking-wide` | 0.025em |
| `.tracking-wider` | 0.05em |
| `.tracking-widest` | 0.1em |

## Text Alignment

| Class | `text-align` |
|-------|-------------|
| `.text-left` | left |
| `.text-center` | center |
| `.text-right` | right |
| `.text-justify` | justify |
| `.text-start` | start |
| `.text-end` | end |

## Text Transform

| Class | `text-transform` |
|-------|-----------------|
| `.text-uppercase` | uppercase |
| `.text-lowercase` | lowercase |
| `.text-capitalize` | capitalize |
| `.text-none` | none |
