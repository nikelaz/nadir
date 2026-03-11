# Reset

The reset bundle applies a set of baseline CSS rules that normalize browser defaults and create a consistent starting point across environments.

## Import

```js
import '@nikelaz/nadir/dist/nadir-reset.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## What It Does

The reset is classless — it targets HTML elements directly, not class names. It covers the following areas:

**Box model**
- Sets `box-sizing: border-box` on all elements so padding and borders are included in declared widths and heights.
- Removes default `margin` and `padding` from all elements.

**Typography**
- Resets heading sizes (`h1`–`h6`) to inherit font size and weight from their context rather than applying browser defaults.
- Removes default underlines and color inheritance quirks from links.
- Sets consistent font feature settings and variation settings via CSS variables (`--default-font-feature-settings`, `--default-font-variation-settings`).
- Applies a sensible default `line-height`.

**Forms and interactive elements**
- Resets `button`, `input`, `select`, and `textarea` to inherit font properties and remove default browser styling.
- Removes default appearance on form controls.
- Normalizes cursor behavior on interactive elements.

**Media**
- Sets `max-width: 100%` on `img`, `video`, and other replaced elements so they never overflow their containers.
- Removes the small gap below inline images by setting `display: block` on media elements.

**Lists**
- Removes default list style and padding from `ul` and `ol`.

## When to Include It

Include the reset whenever you want a clean baseline. It is safe to load it globally as early as possible in your CSS, before any other Nadir bundles or your own styles.

If you are working in an environment where you cannot touch the global stylesheet (for example, inside a shadow DOM or a third-party widget), skip the reset and use only the utility bundles you need.
