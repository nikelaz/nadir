# Nadir

A minimal, modular CSS utility library for building user interfaces. Nadir covers the structural and typographic patterns that appear in virtually every UI — without any opinion on colors, components, or your visual design.

The goal is to build 90% of interfaces with a vocabulary small enough to know by memory.

## Install

```bash
npm install @nikelaz/nadir
```

## Usage

Import the full bundle, or only the parts you need:

```js
// Everything
import '@nikelaz/nadir/dist/nadir.min.css';

// Or individual bundles
import '@nikelaz/nadir/dist/nadir-reset.min.css';
import '@nikelaz/nadir/dist/nadir-typography.min.css';
import '@nikelaz/nadir/dist/nadir-spacing.min.css';
import '@nikelaz/nadir/dist/nadir-layout.min.css';
import '@nikelaz/nadir/dist/nadir-decorations.min.css';
import '@nikelaz/nadir/dist/nadir-interactive.min.css';
```

Each bundle is available as both `.css` and `.min.css`.

## Bundles

| Bundle | Contents |
|--------|----------|
| `nadir-reset` | CSS reset |
| `nadir-typography` | Font families, sizes, weights, line heights, letter spacing, text alignment and transform |
| `nadir-spacing` | Margin, padding, and gap utilities across a 9-step scale |
| `nadir-layout` | Flex/grid stacks, display, alignment, sizing, overflow, aspect ratio, object fit, position, visibility |
| `nadir-decorations` | Border-radius, shadows, borders, opacity |
| `nadir-interactive` | Cursor and pointer events |
| `nadir` | All of the above |

## Customization

Font families are wired to CSS custom properties. Set them in your own stylesheet:

```css
:root {
  --nadir-ff-base: 'Inter', sans-serif;
  --nadir-ff-display: 'Cal Sans', sans-serif;
}
```

## Documentation

Full reference at [nikelaz.github.io/nadir](https://nikelaz.github.io/nadir).

## Contributing

To build the CSS bundles from source:

```bash
npm install
npm run build
```

Bundle composition and generated scales are defined in `src/config.js`.
