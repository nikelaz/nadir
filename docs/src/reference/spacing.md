# Spacing

Spacing utilities control margin, padding, and gap using a consistent size scale and directional modifiers.

## Margin

Add margin (external spacing) to elements.

### Pattern

```
margin-[direction]-[size]
```

### Directions

- `top`, `right`, `bottom`, `left` - Single side
- `x` - Horizontal (left and right)
- `y` - Vertical (top and bottom)
- _(omit)_ - All sides

### Sizes

`4xs`, `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`

### Examples

```html
<!-- All sides -->
<div class="margin-m">Equal margin on all sides</div>

<!-- Single side -->
<div class="margin-top-l">Large top margin</div>
<div class="margin-bottom-s">Small bottom margin</div>

<!-- Axis -->
<div class="margin-x-m">Horizontal margin</div>
<div class="margin-y-l">Vertical margin</div>

<!-- Combination -->
<div class="margin-top-xl margin-x-m">
  Extra large top margin, medium horizontal
</div>
```

## Padding

Add padding (internal spacing) to elements.

### Pattern

```
padding-[direction]-[size]
```

### Directions

Same as margin: `top`, `right`, `bottom`, `left`, `x`, `y`, or omit for all sides.

### Examples

```html
<!-- All sides -->
<div class="padding-l">Large padding on all sides</div>

<!-- Single side -->
<div class="padding-left-m">Medium left padding</div>

<!-- Axis -->
<div class="padding-x-l padding-y-s">
  Large horizontal padding, small vertical
</div>
```

## Gap

Set the gap between child elements in flex or grid layouts.

### Pattern

```
gap-[direction]-[size]
```

### Directions

- `x` - Column gap (horizontal)
- `y` - Row gap (vertical)
- _(omit)_ - Both directions

### Examples

```html
<!-- Both directions -->
<div class="stack-y gap-m">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Single axis -->
<div class="stack-x gap-x-l">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid with different gaps -->
<div class="gap-x-m gap-y-s">
  <!-- Grid items -->
</div>
```

## Size Reference

| Size | Typical Value | Use Case |
|------|---------------|----------|
| `4xs` | ~2px | Hairline spacing |
| `3xs` | ~4px | Tiny spacing |
| `2xs` | ~8px | Very tight spacing |
| `xs` | ~12px | Tight spacing |
| `s` | ~16px | Compact spacing |
| `m` | ~24px | Comfortable spacing |
| `l` | ~32px | Generous spacing |
| `xl` | ~48px | Large spacing |
| `2xl` | ~64px | Very large spacing |
| `3xl` | ~96px | Extra large spacing |

## Common Patterns

```html
<!-- Card with internal padding and external margin -->
<div class="padding-l margin-bottom-m">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>

<!-- Stack with gaps between items -->
<div class="stack-y gap-s padding-m">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Centered content with breathing room -->
<div class="padding-x-2xl padding-y-xl">
  <h1>Welcome</h1>
</div>
```
