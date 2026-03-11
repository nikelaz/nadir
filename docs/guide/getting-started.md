# Getting Started

## Installation

Install Nadir from npm:

```bash
npm install @nikelaz/nadir
```

## Importing Styles

Nadir ships pre-built CSS in its `dist/` directory. Each bundle is available in both standard and minified variants.

### Full Bundle

To include everything at once, import the full bundle:

```html
<!-- In HTML -->
<link rel="stylesheet" href="node_modules/@nikelaz/nadir/dist/nadir.min.css">
```

```js
// In a JavaScript bundler (Vite, webpack, etc.)
import '@nikelaz/nadir/dist/nadir.min.css';
```

### Individual Bundles

For better control over what you load, import only the bundles you need:

| Bundle | File | Contents |
|--------|------|----------|
| Reset | `dist/nadir-reset.min.css` | CSS reset |
| Typography | `dist/nadir-typography.min.css` | Font sizes, weights, line heights, tracking, alignment |
| Spacing | `dist/nadir-spacing.min.css` | Margin, padding, gap utilities |
| Layout | `dist/nadir-layout.min.css` | Flex/grid stacks, display, alignment, sizing, overflow, position, visibility |
| Decorations | `dist/nadir-decorations.min.css` | Border-radius, shadows, borders, opacity |
| Interactive | `dist/nadir-interactive.min.css` | Cursor and pointer events |

Example — loading only what a page needs:

```js
import '@nikelaz/nadir/dist/nadir-reset.min.css';
import '@nikelaz/nadir/dist/nadir-typography.min.css';
import '@nikelaz/nadir/dist/nadir-layout.min.css';
```

## Customizing via CSS Variables

Nadir's typography classes reference CSS custom properties, so you can set your own fonts without touching the library:

```css
:root {
  --nadir-ff-base: 'Inter', sans-serif;
  --nadir-ff-display: 'Cal Sans', sans-serif;
}
```

These variables are used by the `.font-base` and `.font-display` classes. All other classes use explicit values and need no configuration.

## Quick Example

A simple card built with Nadir classes:

```html
<link rel="stylesheet" href="node_modules/@nikelaz/nadir/dist/nadir.min.css">

<div class="stack-y gap-md padding-lg round shadow">
  <h2 class="font-xl font-bold leading-tight">Card Title</h2>
  <p class="font-sm leading-relaxed">Some body text here.</p>
  <div class="stack-x gap-sm">
    <button class="padding-x-md padding-y-sm round-sm font-sm font-medium">
      Primary
    </button>
    <button class="padding-x-md padding-y-sm round-sm font-sm font-medium">
      Secondary
    </button>
  </div>
</div>
```

## Next Steps

- Browse the [Reference](/reference/typography) to see all available classes.
- Read [Motivation](/guide/motivation) to understand the philosophy behind Nadir.
