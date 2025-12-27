# Shapes

Shape utilities provide basic geometric primitives with modifiers for roundness, shadows, and borders.

## Shape Primitives

Basic geometric shapes that can be styled with modifiers.

### Classes

- `line` - A line element
- `triangle` - A triangle shape
- `rectangle` - A rectangle/box shape
- `circle` - A circular shape

### Examples

```html
<div class="rectangle">Rectangle box</div>
<div class="circle">Circular element</div>
<div class="line">Horizontal line</div>
<div class="triangle">Triangle shape</div>
```

## Roundness

Add rounded corners to elements.

### Pattern

```
round-[size]
```

### Sizes

- `round` - Default roundness
- `round-4xs` through `round-3xl` - Sized border radius

### Examples

```html
<!-- Subtle rounding -->
<div class="rectangle round-s">Slightly rounded</div>

<!-- Medium rounding (common for cards) -->
<div class="rectangle round-m">Medium rounded corners</div>

<!-- Heavy rounding (pill shape with tall elements) -->
<div class="rectangle round-3xl">Very rounded</div>

<!-- Circle from square -->
<div class="rectangle round-3xl" style="aspect-ratio: 1">
  Perfect circle
</div>
```

## Shadow

Add box shadows to elements.

### Pattern

```
shadow-[size]
```

### Sizes

- `shadow` - Default shadow
- `shadow-4xs` through `shadow-3xl` - Sized shadows

### Examples

```html
<!-- Subtle shadow (elevated card) -->
<div class="rectangle shadow-s padding-m">
  Subtly elevated card
</div>

<!-- Medium shadow -->
<div class="rectangle shadow-m padding-l">
  Card with noticeable shadow
</div>

<!-- Large shadow (floating effect) -->
<div class="rectangle shadow-xl padding-l">
  Dramatically elevated element
</div>
```

## Border

Add borders to elements.

### Pattern

```
border-[direction]-[size]
```

### Directions

- `top`, `right`, `bottom`, `left` - Single side
- _(omit)_ - All sides

### Sizes

`4xs`, `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`

### Examples

```html
<!-- All sides -->
<div class="border-m">Border on all sides</div>

<!-- Single side -->
<div class="border-bottom-s">Bottom border only</div>

<!-- Combination -->
<div class="border-left-l border-top-s">
  Thick left border, thin top border
</div>
```

## Combining Modifiers

Shape primitives and modifiers work together to create rich components:

```html
<!-- Card with rounded corners and shadow -->
<div class="rectangle round-m shadow-l padding-l">
  <h2>Card Title</h2>
  <p>Card content with nice styling</p>
</div>

<!-- Button-like element -->
<button class="rectangle round-s shadow-s padding-m">
  Click Me
</button>

<!-- Badge or tag -->
<span class="rectangle round-3xl padding-x-m padding-y-s">
  Badge
</span>

<!-- Bordered section -->
<div class="rectangle border-m round-s padding-l">
  <h3>Bordered Section</h3>
  <p>Content goes here</p>
</div>

<!-- Divider line -->
<div class="line border-bottom-2xs"></div>
```

## Common Patterns

```html
<!-- Elevated card -->
<article class="rectangle round-m shadow-m padding-l margin-bottom-m">
  <h2>Article Title</h2>
  <p>Article content...</p>
</article>

<!-- Input-like element -->
<div class="rectangle border-s round-s padding-m">
  <input type="text" />
</div>

<!-- Avatar -->
<div class="circle shadow-s" style="width: 48px; height: 48px">
  <img src="avatar.jpg" alt="User" />
</div>
```
