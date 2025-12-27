# Core Concepts

Nadir is built around five core modules that work together to provide everything you need to build user interfaces.

## Modules

### Typography

Control text appearance with font families, sizes, and weights.

```html
<h1 class="font-display font-2xl font-bold">Heading</h1>
<p class="font-base font-m font-regular">Body text</p>
```

### Spacing

Manage layout spacing with margin, padding, and gap utilities.

```html
<div class="padding-l margin-top-m gap-s">
  <!-- Content -->
</div>
```

### Shapes

Basic geometric primitives with modifiers for customization.

```html
<div class="rectangle round-m shadow-l">
  <!-- A rounded rectangle with shadow -->
</div>
```

### Layout

Stack-based layout system inspired by SwiftUI.

```html
<div class="stack-y gap-m">
  <!-- Vertical stack with medium gap -->
</div>
```

### Color

Semantic color tokens for text, backgrounds, borders, and more.

```html
<div class="bg-primary text-gray-9 border-accent">
  <!-- Colored container -->
</div>
```

## Size Units

Nadir uses a consistent size scale across all modules:

- `4xs`, `3xs`, `2xs` - Extra small sizes
- `xs`, `s`, `m` - Small to medium sizes
- `l`, `xl`, `2xl`, `3xl` - Large to extra large sizes

## Directions

Spacing utilities support directional modifiers:

- `top`, `right`, `bottom`, `left` - Individual sides
- `x` - Horizontal (left and right)
- `y` - Vertical (top and bottom)
- No direction - All sides

## Naming Convention

Nadir follows a predictable naming pattern:

```
property-[modifier]-[size]
```

Examples:
- `margin-top-l` - Large top margin
- `padding-x-m` - Medium horizontal padding
- `gap-s` - Small gap
- `font-2xl` - 2XL font size
