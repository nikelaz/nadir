# Spacing

The spacing bundle provides margin, padding, and gap classes across a 9-step size scale. All values are in `rem` units.

## Import

```js
import '@nikelaz/nadir/dist/nadir-spacing.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## Size Scale

All spacing classes share the same scale:

| Size | Value |
|------|-------|
| `3xs` | 0.1rem |
| `2xs` | 0.25rem |
| `xs` | 0.5rem |
| `sm` | 0.75rem |
| `md` | 1rem |
| `lg` | 1.25rem |
| `xl` | 1.5rem |
| `2xl` | 1.75rem |
| `3xl` | 2rem |

## Margin

### All Sides

`.margin-{size}` — sets `margin` on all sides.

```html
<div class="margin-md">...</div>
```

### Directional

| Pattern | Property |
|---------|----------|
| `.margin-top-{size}` | `margin-top` |
| `.margin-right-{size}` | `margin-right` |
| `.margin-bottom-{size}` | `margin-bottom` |
| `.margin-left-{size}` | `margin-left` |

### Axis Shortcuts

| Pattern | Properties |
|---------|-----------|
| `.margin-x-{size}` | `margin-left` + `margin-right` |
| `.margin-y-{size}` | `margin-top` + `margin-bottom` |

## Padding

### All Sides

`.padding-{size}` — sets `padding` on all sides.

```html
<div class="padding-lg">...</div>
```

### Directional

| Pattern | Property |
|---------|----------|
| `.padding-top-{size}` | `padding-top` |
| `.padding-right-{size}` | `padding-right` |
| `.padding-bottom-{size}` | `padding-bottom` |
| `.padding-left-{size}` | `padding-left` |

### Axis Shortcuts

| Pattern | Properties |
|---------|-----------|
| `.padding-x-{size}` | `padding-left` + `padding-right` |
| `.padding-y-{size}` | `padding-top` + `padding-bottom` |

## Gap

For use with flex and grid containers.

### Both Axes

`.gap-{size}` — sets `gap` on both axes.

```html
<div class="stack-x gap-sm">...</div>
```

### Axis-Specific

| Pattern | Property |
|---------|----------|
| `.gap-x-{size}` | `column-gap` |
| `.gap-y-{size}` | `row-gap` |
