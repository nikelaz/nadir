# Layout

Layout utilities provide a stack-based composition system inspired by SwiftUI, making it easy to arrange elements horizontally, vertically, or in layers.

## Horizontal Stack

Arrange child elements horizontally using flexbox.

### Class

```
stack-x
```

### Behavior

- Creates a flex container with `flex-direction: row`
- Children are laid out in a horizontal row
- Commonly combined with `gap-x` or `gap` for spacing

### Examples

```html
<!-- Basic horizontal stack -->
<div class="stack-x gap-m">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal navigation -->
<nav class="stack-x gap-l padding-m">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

<!-- Button group -->
<div class="stack-x gap-s">
  <button>Cancel</button>
  <button>Save</button>
</div>
```

## Vertical Stack

Arrange child elements vertically using flexbox.

### Class

```
stack-y
```

### Behavior

- Creates a flex container with `flex-direction: column`
- Children are laid out in a vertical column
- Commonly combined with `gap-y` or `gap` for spacing

### Examples

```html
<!-- Basic vertical stack -->
<div class="stack-y gap-m">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Form layout -->
<form class="stack-y gap-m padding-l">
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <button type="submit">Submit</button>
</form>

<!-- Article structure -->
<article class="stack-y gap-l padding-l">
  <h1>Article Title</h1>
  <p>First paragraph...</p>
  <p>Second paragraph...</p>
</article>
```

## Layered Stack

Layer child elements on top of each other using absolute positioning.

### Class

```
stack-z
```

### Behavior

- Creates a container with `position: relative`
- Children can be positioned absolutely within the container
- Useful for overlays, badges, or layered compositions

### Examples

```html
<!-- Image with overlay -->
<div class="stack-z">
  <img src="background.jpg" alt="Background" />
  <div class="padding-l">
    <h2>Overlay Text</h2>
  </div>
</div>

<!-- Badge on element -->
<div class="stack-z">
  <div class="rectangle padding-m">Content</div>
  <span class="circle bg-accent" style="position: absolute; top: -8px; right: -8px;">
    3
  </span>
</div>
```

## Combining Stacks

Stacks can be nested to create complex layouts:

```html
<!-- Page layout -->
<div class="stack-y gap-0" style="min-height: 100vh">
  <!-- Header -->
  <header class="stack-x gap-m padding-l bg-primary">
    <div>Logo</div>
    <nav class="stack-x gap-m">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <!-- Main content -->
  <main class="stack-y gap-l padding-2xl">
    <h1>Page Title</h1>
    
    <!-- Cards in horizontal stack -->
    <div class="stack-x gap-m">
      <div class="rectangle padding-l shadow-m">Card 1</div>
      <div class="rectangle padding-l shadow-m">Card 2</div>
      <div class="rectangle padding-l shadow-m">Card 3</div>
    </div>
  </main>
  
  <!-- Footer -->
  <footer class="stack-y gap-s padding-l bg-gray-1">
    <p>Footer content</p>
  </footer>
</div>
```

## Common Patterns

```html
<!-- Sidebar layout -->
<div class="stack-x gap-0" style="height: 100vh">
  <aside class="stack-y gap-m padding-m bg-gray-1" style="width: 250px">
    <h2>Sidebar</h2>
    <nav class="stack-y gap-s">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    </nav>
  </aside>
  <main class="padding-l" style="flex: 1">
    <h1>Main Content</h1>
  </main>
</div>

<!-- Card grid (using horizontal stacks) -->
<div class="stack-y gap-m">
  <div class="stack-x gap-m">
    <div class="rectangle padding-m shadow-s">Card 1</div>
    <div class="rectangle padding-m shadow-s">Card 2</div>
  </div>
  <div class="stack-x gap-m">
    <div class="rectangle padding-m shadow-s">Card 3</div>
    <div class="rectangle padding-m shadow-s">Card 4</div>
  </div>
</div>

<!-- Centered content -->
<div class="stack-y gap-m padding-2xl" style="align-items: center">
  <h1 class="font-3xl">Welcome</h1>
  <p class="font-m">Centered content</p>
</div>
```

## Working with Gap

Stacks are commonly combined with gap utilities:

```html
<!-- Tight spacing -->
<div class="stack-y gap-s">...</div>

<!-- Comfortable spacing -->
<div class="stack-y gap-m">...</div>

<!-- Generous spacing -->
<div class="stack-y gap-l">...</div>

<!-- No gap -->
<div class="stack-y gap-0">...</div>

<!-- Different horizontal and vertical gaps -->
<div class="stack-y gap-x-m gap-y-l">...</div>
```
