# Color

Color utilities provide semantic color tokens that can be applied to text, backgrounds, borders, shadows, and accent colors.

## Color Tokens

Nadir provides a set of semantic color tokens:

### Brand Colors

- `primary` - Primary brand color
- `accent` - Accent/secondary color

### Gray Scale

- `gray-0` - Lightest gray (nearly white)
- `gray-1` - Very light gray
- `gray-2` - Light gray
- `gray-3` - Light-medium gray
- `gray-4` - Medium-light gray
- `gray-5` - Medium gray
- `gray-6` - Medium-dark gray
- `gray-7` - Dark gray
- `gray-8` - Very dark gray
- `gray-9` - Darkest gray (nearly black)

## Text Color

Set the color of text content.

### Pattern

```
text-<color>
```

### Examples

```html
<h1 class="text-primary">Primary colored heading</h1>
<p class="text-gray-7">Dark gray body text</p>
<span class="text-accent">Accent colored text</span>
<small class="text-gray-5">Medium gray small text</small>
```

## Background Color

Set the background color of elements.

### Pattern

```
bg-<color>
```

### Examples

```html
<div class="bg-primary">Primary background</div>
<div class="bg-gray-1">Light gray background</div>
<div class="bg-accent">Accent background</div>
<section class="bg-gray-0">Nearly white section</section>
```

## Border Color

Set the color of borders.

### Pattern

```
border-<color>
```

### Examples

```html
<div class="border-m border-primary">Primary border</div>
<div class="border-s border-gray-3">Light gray border</div>
<div class="border-l border-accent">Thick accent border</div>
```

## Shadow Color

Set the color of box shadows.

### Pattern

```
shadow-<color>
```

### Examples

```html
<div class="shadow-l shadow-primary">Primary colored shadow</div>
<div class="shadow-m shadow-gray-5">Gray shadow</div>
<div class="shadow-s shadow-accent">Accent colored shadow</div>
```

## Accent Color

Set the accent color for form elements and interactive components.

### Pattern

```
accent-<color>
```

### Examples

```html
<input type="checkbox" class="accent-primary" />
<input type="radio" class="accent-accent" />
<input type="range" class="accent-primary" />
```

## Color Combinations

Combine color utilities for rich designs:

```html
<!-- Card with colored background and contrasting text -->
<div class="rectangle round-m padding-l bg-primary text-gray-0">
  <h2>Primary Card</h2>
  <p>White text on primary background</p>
</div>

<!-- Bordered element with accent color -->
<div class="rectangle border-m border-accent padding-m">
  <p class="text-accent">Accent themed element</p>
</div>

<!-- Subtle card with shadow -->
<div class="rectangle round-s shadow-m shadow-gray-3 bg-gray-0 padding-l">
  <h3 class="text-gray-9">Card Title</h3>
  <p class="text-gray-7">Card description</p>
</div>
```

## Common Patterns

```html
<!-- Alert/notification -->
<div class="rectangle round-s padding-m bg-accent text-gray-0">
  <strong>Notice:</strong> This is an important message
</div>

<!-- Subtle section background -->
<section class="bg-gray-1 padding-2xl">
  <h2 class="text-gray-9">Section Title</h2>
  <p class="text-gray-7">Section content...</p>
</section>

<!-- Button-like element -->
<button class="rectangle round-s padding-m bg-primary text-gray-0 border-0">
  Click Me
</button>

<!-- Input with colored accent -->
<div class="stack-y gap-s">
  <label class="text-gray-8">Email</label>
  <input 
    type="email" 
    class="rectangle border-m border-gray-3 accent-primary padding-s round-s"
  />
</div>

<!-- Divider with subtle color -->
<hr class="border-bottom-2xs border-gray-2" />
```

## Accessibility Considerations

When using colors, ensure adequate contrast ratios:

```html
<!-- Good contrast -->
<div class="bg-primary text-gray-0">High contrast text</div>
<div class="bg-gray-0 text-gray-9">High contrast text</div>

<!-- Be careful with -->
<div class="bg-gray-3 text-gray-5">May have low contrast</div>
```

## Dark Mode Considerations

::: tip
While Nadir doesn't have built-in dark mode utilities yet, you can combine color tokens with your own dark mode implementation using the gray scale appropriately:

- Light mode: Use `gray-0` to `gray-2` for backgrounds, `gray-7` to `gray-9` for text
- Dark mode: Use `gray-7` to `gray-9` for backgrounds, `gray-0` to `gray-2` for text
:::
