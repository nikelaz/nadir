# Layout

The layout bundle provides classes for display, flex/grid stacking, alignment, sizing, overflow, positioning, and visibility.

## Import

```js
import '@nikelaz/nadir/dist/nadir-layout.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## Display

| Class | `display` |
|-------|----------|
| `.block` | block |
| `.inline-block` | inline-block |
| `.inline` | inline |
| `.flex` | flex |
| `.inline-flex` | inline-flex |
| `.grid` | grid |
| `.inline-grid` | inline-grid |
| `.hidden` | none |

## Stacking

Stacking classes set up flex or grid containers with a directional flow. They are the primary building block for most layouts.

| Class | Description |
|-------|-------------|
| `.stack-x` | Horizontal flex row (`display: flex; flex-direction: row`) |
| `.stack-y` | Vertical flex column (`display: flex; flex-direction: column`) |
| `.stack-z` | Layered grid — children overlap each other (`display: grid; grid-template: 1fr / 1fr`) |

Combine with [spacing](/reference/spacing) gap classes to add space between items:

```html
<div class="stack-x gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Flex Modifiers

Control how flex children grow, shrink, and fill available space.

| Class | Property | Value |
|-------|----------|-------|
| `.flex-1` | `flex` | 1 1 0% |
| `.flex-auto` | `flex` | 1 1 auto |
| `.flex-none` | `flex` | none |
| `.grow` | `flex-grow` | 1 |
| `.no-grow` | `flex-grow` | 0 |
| `.shrink` | `flex-shrink` | 1 |
| `.no-shrink` | `flex-shrink` | 0 |

## Alignment

### Container Alignment (align-items)

| Class | Property | Value |
|-------|----------|-------|
| `.align-start` | `align-items` | start |
| `.align-center` | `align-items` | center |
| `.align-end` | `align-items` | end |

### Container Justification (justify-content)

| Class | Property | Value |
|-------|----------|-------|
| `.justify-start` | `justify-content` | start |
| `.justify-center` | `justify-content` | center |
| `.justify-end` | `justify-content` | end |
| `.justify-between` | `justify-content` | space-between |
| `.justify-around` | `justify-content` | space-around |

### Self Alignment

| Class | Property | Value |
|-------|----------|-------|
| `.align-self-start` | `align-self` | start |
| `.align-self-center` | `align-self` | center |
| `.align-self-end` | `align-self` | end |
| `.justify-self-start` | `justify-self` | start |
| `.justify-self-center` | `justify-self` | center |
| `.justify-self-end` | `justify-self` | end |

## Sizing

| Class | Property | Value |
|-------|----------|-------|
| `.w-full` | `width` | 100% |
| `.w-screen` | `width` | 100vw |
| `.w-auto` | `width` | auto |
| `.w-fit` | `width` | fit-content |
| `.w-min` | `width` | min-content |
| `.w-max` | `width` | max-content |
| `.h-full` | `height` | 100% |
| `.h-screen` | `height` | 100vh |
| `.h-auto` | `height` | auto |
| `.h-fit` | `height` | fit-content |
| `.min-w-0` | `min-width` | 0 |
| `.min-h-0` | `min-height` | 0 |
| `.max-w-full` | `max-width` | 100% |
| `.max-h-full` | `max-height` | 100% |

`.min-w-0` is particularly useful inside flex containers where children can overflow — browsers default to `min-width: auto` for flex items, which prevents shrinking below the content size.

## Overflow

| Class | Property | Value |
|-------|----------|-------|
| `.overflow-hidden` | `overflow` | hidden |
| `.overflow-auto` | `overflow` | auto |
| `.overflow-scroll` | `overflow` | scroll |
| `.overflow-visible` | `overflow` | visible |
| `.overflow-x-hidden` | `overflow-x` | hidden |
| `.overflow-x-auto` | `overflow-x` | auto |
| `.overflow-x-scroll` | `overflow-x` | scroll |
| `.overflow-y-hidden` | `overflow-y` | hidden |
| `.overflow-y-auto` | `overflow-y` | auto |
| `.overflow-y-scroll` | `overflow-y` | scroll |

### Truncate

`.truncate` clips a single line of text with an ellipsis:

```html
<p class="truncate w-full">This long text will be clipped with an ellipsis...</p>
```

It sets `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` together.

## Aspect Ratio

| Class | `aspect-ratio` |
|-------|---------------|
| `.aspect-square` | 1 / 1 |
| `.aspect-video` | 16 / 9 |
| `.aspect-auto` | auto |

## Object Fit

For controlling how images and videos fill their containers:

| Class | `object-fit` |
|-------|-------------|
| `.object-cover` | cover |
| `.object-contain` | contain |
| `.object-fill` | fill |
| `.object-none` | none |
| `.object-scale-down` | scale-down |

## Position

| Class | `position` |
|-------|-----------|
| `.static` | static |
| `.relative` | relative |
| `.absolute` | absolute |
| `.fixed` | fixed |
| `.sticky` | sticky |

### Inset Utilities

| Class | Effect |
|-------|--------|
| `.inset-0` | `top: 0; right: 0; bottom: 0; left: 0` |
| `.inset-x-0` | `left: 0; right: 0` |
| `.inset-y-0` | `top: 0; bottom: 0` |
| `.top-0` | `top: 0` |
| `.right-0` | `right: 0` |
| `.bottom-0` | `bottom: 0` |
| `.left-0` | `left: 0` |

## Visibility

| Class | Effect |
|-------|--------|
| `.visible` | `visibility: visible` |
| `.invisible` | `visibility: hidden` — hides the element but preserves its space in the layout |
| `.sr-only` | Visually hidden but readable by screen readers |

`.sr-only` is the standard pattern for accessible icon buttons and form labels that need a visual equivalent but must remain in the accessibility tree.

## Wrapping

| Class | `flex-wrap` |
|-------|------------|
| `.wrap` | wrap |
