# Reference Overview

This reference documentation provides a complete guide to all Nadir utility classes organized by module.

## Modules

### [Typography](/reference/typography)
Control font families, sizes, weights, and text effects.

**Key Classes:**
- `font-<family>` - Font family (base, display)
- `font-<size>` - Font size (4xs through 3xl)
- `font-<weight>` - Font weight (thin through black)
- `text-shadow-<size>` - Text shadow effects

### [Spacing](/reference/spacing)
Manage layout spacing with margin, padding, and gap.

**Key Classes:**
- `margin-[direction]-[size]` - Margin spacing
- `padding-[direction]-[size]` - Padding spacing
- `gap-[direction]-[size]` - Gap spacing (for flex/grid)

### [Shapes](/reference/shapes)
Basic geometric primitives with modifiers.

**Key Classes:**
- `line`, `triangle`, `rectangle`, `circle` - Shape primitives
- `round-[size]` - Border radius
- `shadow-[size]` - Box shadow
- `border-[direction]-[size]` - Border width

### [Layout](/reference/layout)
Stack-based layout system for composition.

**Key Classes:**
- `stack-x` - Horizontal stack (flexbox row)
- `stack-y` - Vertical stack (flexbox column)
- `stack-z` - Layered stack (absolute positioning)

### [Color](/reference/color)
Semantic color tokens for all color properties.

**Key Classes:**
- `text-<color>` - Text color
- `bg-<color>` - Background color
- `border-<color>` - Border color
- `shadow-<color>` - Shadow color
- `accent-<color>` - Accent color

## Size Scale

All size-based utilities use a consistent scale:

| Size | Usage |
|------|-------|
| `4xs` | Extra extra extra small |
| `3xs` | Extra extra small |
| `2xs` | Extra small |
| `xs` | Small |
| `s` | Small |
| `m` | Medium (often the default) |
| `l` | Large |
| `xl` | Extra large |
| `2xl` | Extra extra large |
| `3xl` | Extra extra extra large |

## Directions

Spacing utilities support directional modifiers:

| Direction | Applies To |
|-----------|------------|
| `top` | Top edge only |
| `right` | Right edge only |
| `bottom` | Bottom edge only |
| `left` | Left edge only |
| `x` | Horizontal (left and right) |
| `y` | Vertical (top and bottom) |
| _(none)_ | All sides |

## Color Tokens

| Token | Purpose |
|-------|---------|
| `primary` | Primary brand color |
| `accent` | Accent/secondary color |
| `gray-0` through `gray-9` | Gray scale (0=lightest, 9=darkest) |

## Font Weights

| Weight | Typical Value |
|--------|---------------|
| `thin` | 100 |
| `light` | 300 |
| `regular` | 400 |
| `medium` | 500 |
| `semibold` | 600 |
| `bold` | 700 |
| `black` | 900 |
