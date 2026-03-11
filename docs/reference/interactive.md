# Interactive

The interactive bundle provides cursor and pointer events utilities. It is the smallest standalone bundle — useful when you only need interaction classes without the rest of the library.

## Import

```js
import '@nikelaz/nadir/dist/nadir-interactive.min.css';
```

Or as part of the full bundle:

```js
import '@nikelaz/nadir/dist/nadir.min.css';
```

## Cursor

| Class | `cursor` |
|-------|---------|
| `.cursor-pointer` | pointer |
| `.cursor-default` | default |
| `.cursor-not-allowed` | not-allowed |
| `.cursor-wait` | wait |
| `.cursor-text` | text |

## Pointer Events

| Class | `pointer-events` |
|-------|-----------------|
| `.pointer-events-none` | none |
| `.pointer-events-auto` | auto |

`.pointer-events-none` is commonly used to make overlays or decorative elements pass clicks through to the content beneath them. `.pointer-events-auto` restores normal behavior on a child element when a parent has disabled pointer events.

## Common Patterns

**Disabled button:**
```html
<button class="opacity-50 cursor-not-allowed" disabled>Submit</button>
```

**Click-through overlay:**
```html
<div class="absolute inset-0 pointer-events-none">
  <!-- decorative overlay, does not block clicks -->
</div>
```

**Disabled wrapper:**
```html
<div class="pointer-events-none opacity-50">
  <!-- all children are non-interactive -->
</div>
```
