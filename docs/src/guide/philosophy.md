# Philosophy

## Why Nadir?

Nadir was created with a specific philosophy in mind: **provide the minimum set of utilities needed to build most user interfaces, without the bloat of trying to cover every possible CSS property.**

## Minimal vs. Comprehensive

While comprehensive utility libraries like Tailwind aim to provide a utility for every CSS property, Nadir takes a different approach. We've identified the core primitives that developers actually use to build interfaces:

- **Typography** - Font control
- **Spacing** - Margin, padding, and gap
- **Shapes** - Basic geometric primitives
- **Layout** - Stack-based composition
- **Color** - Semantic color tokens

These five modules cover the vast majority of what you need to build user interfaces, without the overhead of thousands of utility classes.

## Composition Over Configuration

Nadir encourages building complex interfaces by composing simple primitives. Instead of reaching for a highly specific utility class, you combine fundamental classes to achieve your goal.

```html
<!-- Instead of dozens of specific utilities -->
<div class="stack-y gap-m padding-l bg-primary round-m shadow-l">
  <!-- Clean, readable composition -->
</div>
```

## Performance Matters

Nadir is built with Rust, making compilation extremely fast. While the codebase is still in early development, the goal is to provide near-instant compilation times even for large projects.

## Predictable and Learnable

With a consistent naming convention and limited scope, Nadir is designed to be easy to learn and remember. You don't need to reference documentation constantly - the patterns are intuitive and predictable.

## When to Use Nadir

Nadir is ideal for:
- Projects that want a minimal CSS footprint
- Teams that value simplicity and consistency
- Developers who prefer composition to configuration
- Applications where predictable patterns matter

## When Not to Use Nadir

Nadir might not be the best choice if:
- You need utilities for every possible CSS property
- You prefer writing custom CSS for most styling
- You require extensive theming and customization options
- You're working with a design system that needs pixel-perfect precision everywhere
