# Typography

Typography utilities control font families, sizes, weights, and text effects.

## Font Family

Set the font family for text elements.

### Classes

- `font-base` - Base/body font family (typically system-ui or sans-serif)
- `font-display` - Display font family (for headings and special text)

### Example

```html
<h1 class="font-display">This is a heading</h1>
<p class="font-base">This is body text</p>
```

## Font Size

Control the size of text using the standard size scale.

### Classes

- `font-4xs` - Extra extra extra small
- `font-3xs` - Extra extra small
- `font-2xs` - Extra small
- `font-xs` - Extra small
- `font-s` - Small
- `font-m` - Medium
- `font-l` - Large
- `font-xl` - Extra large
- `font-2xl` - Extra extra large
- `font-3xl` - Extra extra extra large

### Example

```html
<h1 class="font-3xl">Large Heading</h1>
<h2 class="font-2xl">Medium Heading</h2>
<p class="font-m">Body text</p>
<small class="font-s">Small text</small>
```

## Font Weight

Set the weight (boldness) of text.

### Classes

- `font-thin` - 100 weight
- `font-light` - 300 weight
- `font-regular` - 400 weight (normal)
- `font-medium` - 500 weight
- `font-semibold` - 600 weight
- `font-bold` - 700 weight
- `font-black` - 900 weight

### Example

```html
<p class="font-light">Light text</p>
<p class="font-regular">Regular text</p>
<p class="font-bold">Bold text</p>
<p class="font-black">Black (very bold) text</p>
```

## Text Shadow

Add shadow effects to text.

### Classes

- `text-shadow` - Default text shadow
- `text-shadow-4xs` through `text-shadow-3xl` - Sized text shadows

### Example

```html
<h1 class="text-shadow-l">Text with large shadow</h1>
<p class="text-shadow">Text with default shadow</p>
```

## Composition

Combine typography utilities to achieve the desired effect:

```html
<h1 class="font-display font-3xl font-bold text-shadow-m">
  Impactful Heading
</h1>

<p class="font-base font-m font-regular">
  Regular body text with comfortable reading size.
</p>

<small class="font-base font-s font-light">
  Fine print or secondary information.
</small>
```
