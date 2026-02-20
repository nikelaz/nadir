# Nadir

Nadir is a library of utility classes that allow you to build user interfaces. Unlike large utility libraries like tailwind, Nadir doesn't attempt to provide utilities for every possible CSS property. Instead it provides a system of classes that allow you to build most user interfaces with a powerful and minimal system of primitives.

## Features

- **Zero Heavy Dependencies**: Built entirely with native Node.js and minified via `lightningcss`.
- **Modular Bundling**: Load exactly the styles you need. Choose from resets, typography, spacing, layout, UI decorations, or bundle them all together!
- **CSS Variables**: Highly configurable through CSS parameters (var(--default-font-family), var(--nadir-ff-base), etc.).
- **Static + Generated**: We balance simple static CSS utility files (like flex and grid alignment) with generated files for spacing scales and font sizes to keep the framework footprint tiny.

## Configuration

You can customize the generated class scales by modifying `src/config.js` and running the build script:

```bash
npm install
npm run build
```

This dynamic generator supports building custom `BUNDLES`.
