# Decorations

The decorations bundle provides border-radius, box-shadow, border, and opacity utility classes.

## Import

```js
import '@nikelaz/nadir/dist/nadir-decorations.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## Border Radius

### Named Variants

| Class | `border-radius` |
|-------|----------------|
| `.round-none` | 0px |
| `.round` | 1rem (same as `md`) |
| `.round-full` | 9999px — pill shape |
| `.round-circle` | 50% — use with equal width/height for a circle |

### Scaled Variants

| Class | Value |
|-------|-------|
| `.round-3xs` | 0.1rem |
| `.round-2xs` | 0.25rem |
| `.round-xs` | 0.5rem |
| `.round-sm` | 0.75rem |
| `.round-md` | 1rem |
| `.round-lg` | 1.25rem |
| `.round-xl` | 1.5rem |
| `.round-2xl` | 1.75rem |
| `.round-3xl` | 2rem |

## Shadows

### Drop Shadows

| Class | Description |
|-------|-------------|
| `.shadow-none` | No shadow |
| `.shadow-sm` | Small drop shadow |
| `.shadow` | Default drop shadow (alias for `.shadow-md`) |
| `.shadow-md` | Medium drop shadow |
| `.shadow-lg` | Large drop shadow |
| `.shadow-xl` | Extra large drop shadow |
| `.shadow-2xl` | 2× extra large drop shadow |

### Inset Shadows

| Class | Description |
|-------|-------------|
| `.shadow-inner-sm` | Small inset shadow |
| `.shadow-inner` | Default inset shadow (alias for `.shadow-inner-md`) |
| `.shadow-inner-md` | Medium inset shadow |
| `.shadow-inner-lg` | Large inset shadow |
| `.shadow-inner-xl` | Extra large inset shadow |
| `.shadow-inner-2xl` | 2× extra large inset shadow |

## Border

Border classes use `currentColor` so the border inherits the element's text color. Control the actual color by setting `color` on the element or a parent.

### Width

| Class | Property | Value |
|-------|----------|-------|
| `.border` | `border` | 1px solid currentColor |
| `.border-2` | `border` | 2px solid currentColor |
| `.border-4` | `border` | 4px solid currentColor |
| `.border-none` | `border` | none |

### Directional

| Class | Property | Value |
|-------|----------|-------|
| `.border-top` | `border-top` | 1px solid currentColor |
| `.border-right` | `border-right` | 1px solid currentColor |
| `.border-bottom` | `border-bottom` | 1px solid currentColor |
| `.border-left` | `border-left` | 1px solid currentColor |

## Opacity

| Class | `opacity` |
|-------|----------|
| `.opacity-0` | 0 |
| `.opacity-25` | 0.25 |
| `.opacity-50` | 0.5 |
| `.opacity-75` | 0.75 |
| `.opacity-100` | 1 |

Useful for disabled states, overlays, and placeholder content:

```html
<button class="opacity-50 cursor-not-allowed" disabled>Disabled</button>
```
