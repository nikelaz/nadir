// All Nadir CSS utility classes as structured data.
// Each entry: { name, bundle, css, description }
// name: class name without the leading dot
// css:  the CSS declaration(s) the class applies

export const CLASSES = [

  // ─── Layout: Stacking ──────────────────────────────────────────────────────
  { name: 'stack-x',  bundle: 'layout', css: 'display: flex; flex-direction: row;',    description: 'Horizontal flex row container' },
  { name: 'stack-y',  bundle: 'layout', css: 'display: flex; flex-direction: column;', description: 'Vertical flex column container' },
  { name: 'stack-z',  bundle: 'layout', css: 'display: grid; grid-template: 1fr / 1fr;', description: 'Layered grid — children overlap at the same position' },

  // ─── Layout: Display ───────────────────────────────────────────────────────
  { name: 'block',        bundle: 'layout', css: 'display: block;',       description: 'Block display' },
  { name: 'inline-block', bundle: 'layout', css: 'display: inline-block;', description: 'Inline-block display' },
  { name: 'inline',       bundle: 'layout', css: 'display: inline;',      description: 'Inline display' },
  { name: 'flex',         bundle: 'layout', css: 'display: flex;',        description: 'Flex container' },
  { name: 'inline-flex',  bundle: 'layout', css: 'display: inline-flex;', description: 'Inline flex container' },
  { name: 'grid',         bundle: 'layout', css: 'display: grid;',        description: 'Grid container' },
  { name: 'inline-grid',  bundle: 'layout', css: 'display: inline-grid;', description: 'Inline grid container' },
  { name: 'hidden',       bundle: 'layout', css: 'display: none;',        description: 'Hide element (removes from flow)' },

  // ─── Layout: Flex Modifiers ────────────────────────────────────────────────
  { name: 'flex-1',    bundle: 'layout', css: 'flex: 1 1 0%;',  description: 'Grow and shrink, ignoring initial size' },
  { name: 'flex-auto', bundle: 'layout', css: 'flex: 1 1 auto;', description: 'Grow and shrink, based on initial size' },
  { name: 'flex-none', bundle: 'layout', css: 'flex: none;',     description: 'Do not grow or shrink' },
  { name: 'grow',      bundle: 'layout', css: 'flex-grow: 1;',   description: 'Allow element to grow to fill available space' },
  { name: 'no-grow',   bundle: 'layout', css: 'flex-grow: 0;',   description: 'Prevent element from growing' },
  { name: 'shrink',    bundle: 'layout', css: 'flex-shrink: 1;', description: 'Allow element to shrink if needed' },
  { name: 'no-shrink', bundle: 'layout', css: 'flex-shrink: 0;', description: 'Prevent element from shrinking' },

  // ─── Layout: Alignment ─────────────────────────────────────────────────────
  { name: 'align-start',       bundle: 'layout', css: 'align-items: start;',       description: 'Align children to start of cross axis' },
  { name: 'align-center',      bundle: 'layout', css: 'align-items: center;',      description: 'Align children to center of cross axis' },
  { name: 'align-end',         bundle: 'layout', css: 'align-items: end;',         description: 'Align children to end of cross axis' },
  { name: 'justify-start',     bundle: 'layout', css: 'justify-content: start;',   description: 'Justify children to start of main axis' },
  { name: 'justify-center',    bundle: 'layout', css: 'justify-content: center;',  description: 'Justify children to center of main axis' },
  { name: 'justify-end',       bundle: 'layout', css: 'justify-content: end;',     description: 'Justify children to end of main axis' },
  { name: 'justify-between',   bundle: 'layout', css: 'justify-content: space-between;', description: 'Distribute children with space between them' },
  { name: 'justify-around',    bundle: 'layout', css: 'justify-content: space-around;',  description: 'Distribute children with space around them' },
  { name: 'align-self-start',  bundle: 'layout', css: 'align-self: start;',        description: 'Align this element to start of cross axis' },
  { name: 'align-self-center', bundle: 'layout', css: 'align-self: center;',       description: 'Align this element to center of cross axis' },
  { name: 'align-self-end',    bundle: 'layout', css: 'align-self: end;',          description: 'Align this element to end of cross axis' },
  { name: 'justify-self-start',  bundle: 'layout', css: 'justify-self: start;',    description: 'Justify this element to start of inline axis' },
  { name: 'justify-self-center', bundle: 'layout', css: 'justify-self: center;',   description: 'Justify this element to center of inline axis' },
  { name: 'justify-self-end',    bundle: 'layout', css: 'justify-self: end;',      description: 'Justify this element to end of inline axis' },

  // ─── Layout: Sizing ────────────────────────────────────────────────────────
  { name: 'w-full',    bundle: 'layout', css: 'width: 100%;',        description: 'Full width of parent' },
  { name: 'w-screen',  bundle: 'layout', css: 'width: 100vw;',       description: 'Full viewport width' },
  { name: 'w-auto',    bundle: 'layout', css: 'width: auto;',        description: 'Auto width' },
  { name: 'w-fit',     bundle: 'layout', css: 'width: fit-content;', description: 'Shrink to fit content width' },
  { name: 'w-min',     bundle: 'layout', css: 'width: min-content;', description: 'Minimum content width' },
  { name: 'w-max',     bundle: 'layout', css: 'width: max-content;', description: 'Maximum content width (no wrapping)' },
  { name: 'h-full',    bundle: 'layout', css: 'height: 100%;',       description: 'Full height of parent' },
  { name: 'h-screen',  bundle: 'layout', css: 'height: 100vh;',      description: 'Full viewport height' },
  { name: 'h-auto',    bundle: 'layout', css: 'height: auto;',       description: 'Auto height' },
  { name: 'h-fit',     bundle: 'layout', css: 'height: fit-content;', description: 'Shrink to fit content height' },
  { name: 'min-w-0',   bundle: 'layout', css: 'min-width: 0;',       description: 'Remove default min-width (allows flex children to shrink below content size)' },
  { name: 'min-h-0',   bundle: 'layout', css: 'min-height: 0;',      description: 'Remove default min-height' },
  { name: 'max-w-full', bundle: 'layout', css: 'max-width: 100%;',   description: 'Cap width at 100% of parent' },
  { name: 'max-h-full', bundle: 'layout', css: 'max-height: 100%;',  description: 'Cap height at 100% of parent' },

  // ─── Layout: Overflow ──────────────────────────────────────────────────────
  { name: 'overflow-hidden',   bundle: 'layout', css: 'overflow: hidden;',   description: 'Clip overflowing content on both axes' },
  { name: 'overflow-auto',     bundle: 'layout', css: 'overflow: auto;',     description: 'Scroll when content overflows on either axis' },
  { name: 'overflow-scroll',   bundle: 'layout', css: 'overflow: scroll;',   description: 'Always show scrollbar on both axes' },
  { name: 'overflow-visible',  bundle: 'layout', css: 'overflow: visible;',  description: 'Allow content to overflow (default)' },
  { name: 'overflow-x-hidden', bundle: 'layout', css: 'overflow-x: hidden;', description: 'Clip horizontal overflow' },
  { name: 'overflow-x-auto',   bundle: 'layout', css: 'overflow-x: auto;',   description: 'Horizontal scroll when content overflows' },
  { name: 'overflow-x-scroll', bundle: 'layout', css: 'overflow-x: scroll;', description: 'Always show horizontal scrollbar' },
  { name: 'overflow-y-hidden', bundle: 'layout', css: 'overflow-y: hidden;', description: 'Clip vertical overflow' },
  { name: 'overflow-y-auto',   bundle: 'layout', css: 'overflow-y: auto;',   description: 'Vertical scroll when content overflows' },
  { name: 'overflow-y-scroll', bundle: 'layout', css: 'overflow-y: scroll;', description: 'Always show vertical scrollbar' },
  { name: 'truncate',          bundle: 'layout', css: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;', description: 'Clip text to one line with ellipsis' },

  // ─── Layout: Aspect Ratio ──────────────────────────────────────────────────
  { name: 'aspect-square', bundle: 'layout', css: 'aspect-ratio: 1 / 1;',  description: 'Square aspect ratio' },
  { name: 'aspect-video',  bundle: 'layout', css: 'aspect-ratio: 16 / 9;', description: '16:9 widescreen aspect ratio' },
  { name: 'aspect-auto',   bundle: 'layout', css: 'aspect-ratio: auto;',   description: 'Natural aspect ratio (default)' },

  // ─── Layout: Object Fit ────────────────────────────────────────────────────
  { name: 'object-cover',      bundle: 'layout', css: 'object-fit: cover;',      description: 'Scale image/video to cover container, cropping as needed' },
  { name: 'object-contain',    bundle: 'layout', css: 'object-fit: contain;',    description: 'Scale image/video to fit inside container without cropping' },
  { name: 'object-fill',       bundle: 'layout', css: 'object-fit: fill;',       description: 'Stretch image/video to fill container exactly' },
  { name: 'object-none',       bundle: 'layout', css: 'object-fit: none;',       description: 'Display image/video at its natural size' },
  { name: 'object-scale-down', bundle: 'layout', css: 'object-fit: scale-down;', description: 'Use contain or none, whichever is smaller' },

  // ─── Layout: Position ──────────────────────────────────────────────────────
  { name: 'static',   bundle: 'layout', css: 'position: static;',   description: 'Normal document flow (default)' },
  { name: 'relative', bundle: 'layout', css: 'position: relative;', description: 'Positioned relative to its normal position' },
  { name: 'absolute', bundle: 'layout', css: 'position: absolute;', description: 'Positioned relative to nearest positioned ancestor' },
  { name: 'fixed',    bundle: 'layout', css: 'position: fixed;',    description: 'Positioned relative to viewport' },
  { name: 'sticky',   bundle: 'layout', css: 'position: sticky;',   description: 'Sticks to a position when scrolling' },
  { name: 'inset-0',   bundle: 'layout', css: 'top: 0; right: 0; bottom: 0; left: 0;', description: 'Set all insets to 0 (use with absolute/fixed to fill parent)' },
  { name: 'inset-x-0', bundle: 'layout', css: 'left: 0; right: 0;',  description: 'Set left and right to 0' },
  { name: 'inset-y-0', bundle: 'layout', css: 'top: 0; bottom: 0;',  description: 'Set top and bottom to 0' },
  { name: 'top-0',    bundle: 'layout', css: 'top: 0;',    description: 'Pin to top edge' },
  { name: 'right-0',  bundle: 'layout', css: 'right: 0;',  description: 'Pin to right edge' },
  { name: 'bottom-0', bundle: 'layout', css: 'bottom: 0;', description: 'Pin to bottom edge' },
  { name: 'left-0',   bundle: 'layout', css: 'left: 0;',   description: 'Pin to left edge' },

  // ─── Layout: Visibility ────────────────────────────────────────────────────
  { name: 'visible',   bundle: 'layout', css: 'visibility: visible;', description: 'Make element visible' },
  { name: 'invisible', bundle: 'layout', css: 'visibility: hidden;',  description: 'Hide element while preserving its space in the layout' },
  { name: 'sr-only',   bundle: 'layout', css: 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;', description: 'Visually hidden but readable by screen readers' },

  // ─── Layout: Wrapping ──────────────────────────────────────────────────────
  { name: 'wrap', bundle: 'layout', css: 'flex-wrap: wrap;', description: 'Allow flex children to wrap onto multiple lines' },

  // ─── Typography: Font Family ───────────────────────────────────────────────
  { name: 'font-base',    bundle: 'typography', css: 'font-family: var(--nadir-ff-base);',    description: 'Apply base font family (set via --nadir-ff-base CSS variable)' },
  { name: 'font-display', bundle: 'typography', css: 'font-family: var(--nadir-ff-display);', description: 'Apply display font family (set via --nadir-ff-display CSS variable)' },

  // ─── Typography: Font Size ─────────────────────────────────────────────────
  { name: 'font-3xs', bundle: 'typography', css: 'font-size: 0.1rem;',  description: 'Font size 3xs (0.1rem)' },
  { name: 'font-2xs', bundle: 'typography', css: 'font-size: 0.25rem;', description: 'Font size 2xs (0.25rem)' },
  { name: 'font-xs',  bundle: 'typography', css: 'font-size: 0.5rem;',  description: 'Font size xs (0.5rem)' },
  { name: 'font-sm',  bundle: 'typography', css: 'font-size: 0.75rem;', description: 'Font size sm (0.75rem)' },
  { name: 'font-md',  bundle: 'typography', css: 'font-size: 1rem;',    description: 'Font size md (1rem)' },
  { name: 'font-lg',  bundle: 'typography', css: 'font-size: 1.25rem;', description: 'Font size lg (1.25rem)' },
  { name: 'font-xl',  bundle: 'typography', css: 'font-size: 1.5rem;',  description: 'Font size xl (1.5rem)' },
  { name: 'font-2xl', bundle: 'typography', css: 'font-size: 1.75rem;', description: 'Font size 2xl (1.75rem)' },
  { name: 'font-3xl', bundle: 'typography', css: 'font-size: 2rem;',    description: 'Font size 3xl (2rem)' },

  // ─── Typography: Font Weight ───────────────────────────────────────────────
  { name: 'font-thin',     bundle: 'typography', css: 'font-weight: 200;', description: 'Font weight thin (200)' },
  { name: 'font-light',    bundle: 'typography', css: 'font-weight: 300;', description: 'Font weight light (300)' },
  { name: 'font-regular',  bundle: 'typography', css: 'font-weight: 400;', description: 'Font weight regular (400)' },
  { name: 'font-medium',   bundle: 'typography', css: 'font-weight: 500;', description: 'Font weight medium (500)' },
  { name: 'font-semibold', bundle: 'typography', css: 'font-weight: 600;', description: 'Font weight semibold (600)' },
  { name: 'font-bold',     bundle: 'typography', css: 'font-weight: 700;', description: 'Font weight bold (700)' },
  { name: 'font-black',    bundle: 'typography', css: 'font-weight: 900;', description: 'Font weight black (900)' },

  // ─── Typography: Line Height ───────────────────────────────────────────────
  { name: 'leading-none',    bundle: 'typography', css: 'line-height: 1;',     description: 'Line height 1 (no extra spacing)' },
  { name: 'leading-tight',   bundle: 'typography', css: 'line-height: 1.25;',  description: 'Line height 1.25' },
  { name: 'leading-snug',    bundle: 'typography', css: 'line-height: 1.375;', description: 'Line height 1.375' },
  { name: 'leading-normal',  bundle: 'typography', css: 'line-height: 1.5;',   description: 'Line height 1.5 (default readable)' },
  { name: 'leading-relaxed', bundle: 'typography', css: 'line-height: 1.625;', description: 'Line height 1.625' },
  { name: 'leading-loose',   bundle: 'typography', css: 'line-height: 2;',     description: 'Line height 2 (double-spaced)' },

  // ─── Typography: Letter Spacing ────────────────────────────────────────────
  { name: 'tracking-tighter', bundle: 'typography', css: 'letter-spacing: -0.05em;', description: 'Very tight letter spacing' },
  { name: 'tracking-tight',   bundle: 'typography', css: 'letter-spacing: -0.025em;', description: 'Tight letter spacing' },
  { name: 'tracking-normal',  bundle: 'typography', css: 'letter-spacing: 0em;',      description: 'Normal letter spacing' },
  { name: 'tracking-wide',    bundle: 'typography', css: 'letter-spacing: 0.025em;',  description: 'Wide letter spacing' },
  { name: 'tracking-wider',   bundle: 'typography', css: 'letter-spacing: 0.05em;',   description: 'Wider letter spacing' },
  { name: 'tracking-widest',  bundle: 'typography', css: 'letter-spacing: 0.1em;',    description: 'Widest letter spacing' },

  // ─── Typography: Text Alignment ────────────────────────────────────────────
  { name: 'text-left',    bundle: 'typography', css: 'text-align: left;',    description: 'Left-align text' },
  { name: 'text-center',  bundle: 'typography', css: 'text-align: center;',  description: 'Center-align text' },
  { name: 'text-right',   bundle: 'typography', css: 'text-align: right;',   description: 'Right-align text' },
  { name: 'text-justify', bundle: 'typography', css: 'text-align: justify;', description: 'Justify text' },
  { name: 'text-start',   bundle: 'typography', css: 'text-align: start;',   description: 'Align text to start (logical)' },
  { name: 'text-end',     bundle: 'typography', css: 'text-align: end;',     description: 'Align text to end (logical)' },

  // ─── Typography: Text Transform ────────────────────────────────────────────
  { name: 'text-uppercase',  bundle: 'typography', css: 'text-transform: uppercase;',  description: 'Transform text to uppercase' },
  { name: 'text-lowercase',  bundle: 'typography', css: 'text-transform: lowercase;',  description: 'Transform text to lowercase' },
  { name: 'text-capitalize', bundle: 'typography', css: 'text-transform: capitalize;', description: 'Capitalize first letter of each word' },
  { name: 'text-none',       bundle: 'typography', css: 'text-transform: none;',       description: 'Remove text transform' },

  // ─── Spacing: Margin (all sides) ───────────────────────────────────────────
  { name: 'margin-3xs', bundle: 'spacing', css: 'margin: 0.1rem;',  description: 'Margin all sides 3xs (0.1rem)' },
  { name: 'margin-2xs', bundle: 'spacing', css: 'margin: 0.25rem;', description: 'Margin all sides 2xs (0.25rem)' },
  { name: 'margin-xs',  bundle: 'spacing', css: 'margin: 0.5rem;',  description: 'Margin all sides xs (0.5rem)' },
  { name: 'margin-sm',  bundle: 'spacing', css: 'margin: 0.75rem;', description: 'Margin all sides sm (0.75rem)' },
  { name: 'margin-md',  bundle: 'spacing', css: 'margin: 1rem;',    description: 'Margin all sides md (1rem)' },
  { name: 'margin-lg',  bundle: 'spacing', css: 'margin: 1.25rem;', description: 'Margin all sides lg (1.25rem)' },
  { name: 'margin-xl',  bundle: 'spacing', css: 'margin: 1.5rem;',  description: 'Margin all sides xl (1.5rem)' },
  { name: 'margin-2xl', bundle: 'spacing', css: 'margin: 1.75rem;', description: 'Margin all sides 2xl (1.75rem)' },
  { name: 'margin-3xl', bundle: 'spacing', css: 'margin: 2rem;',    description: 'Margin all sides 3xl (2rem)' },

  // ─── Spacing: Margin (directional) ─────────────────────────────────────────
  ...['top','right','bottom','left'].flatMap(dir =>
    [['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]].map(
      ([size, rem]) => ({ name: `margin-${dir}-${size}`, bundle: 'spacing', css: `margin-${dir}: ${rem}rem;`, description: `Margin ${dir} ${size} (${rem}rem)` })
    )
  ),

  // ─── Spacing: Margin (axis) ────────────────────────────────────────────────
  ...['x','y'].flatMap(axis =>
    [['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]].map(([size, rem]) => {
      const props = axis === 'x' ? `margin-left: ${rem}rem; margin-right: ${rem}rem;` : `margin-top: ${rem}rem; margin-bottom: ${rem}rem;`;
      const label = axis === 'x' ? 'left and right' : 'top and bottom';
      return { name: `margin-${axis}-${size}`, bundle: 'spacing', css: props, description: `Margin ${label} ${size} (${rem}rem)` };
    })
  ),

  // ─── Spacing: Padding (all sides) ──────────────────────────────────────────
  { name: 'padding-3xs', bundle: 'spacing', css: 'padding: 0.1rem;',  description: 'Padding all sides 3xs (0.1rem)' },
  { name: 'padding-2xs', bundle: 'spacing', css: 'padding: 0.25rem;', description: 'Padding all sides 2xs (0.25rem)' },
  { name: 'padding-xs',  bundle: 'spacing', css: 'padding: 0.5rem;',  description: 'Padding all sides xs (0.5rem)' },
  { name: 'padding-sm',  bundle: 'spacing', css: 'padding: 0.75rem;', description: 'Padding all sides sm (0.75rem)' },
  { name: 'padding-md',  bundle: 'spacing', css: 'padding: 1rem;',    description: 'Padding all sides md (1rem)' },
  { name: 'padding-lg',  bundle: 'spacing', css: 'padding: 1.25rem;', description: 'Padding all sides lg (1.25rem)' },
  { name: 'padding-xl',  bundle: 'spacing', css: 'padding: 1.5rem;',  description: 'Padding all sides xl (1.5rem)' },
  { name: 'padding-2xl', bundle: 'spacing', css: 'padding: 1.75rem;', description: 'Padding all sides 2xl (1.75rem)' },
  { name: 'padding-3xl', bundle: 'spacing', css: 'padding: 2rem;',    description: 'Padding all sides 3xl (2rem)' },

  // ─── Spacing: Padding (directional) ────────────────────────────────────────
  ...['top','right','bottom','left'].flatMap(dir =>
    [['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]].map(
      ([size, rem]) => ({ name: `padding-${dir}-${size}`, bundle: 'spacing', css: `padding-${dir}: ${rem}rem;`, description: `Padding ${dir} ${size} (${rem}rem)` })
    )
  ),

  // ─── Spacing: Padding (axis) ───────────────────────────────────────────────
  ...['x','y'].flatMap(axis =>
    [['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]].map(([size, rem]) => {
      const props = axis === 'x' ? `padding-left: ${rem}rem; padding-right: ${rem}rem;` : `padding-top: ${rem}rem; padding-bottom: ${rem}rem;`;
      const label = axis === 'x' ? 'left and right' : 'top and bottom';
      return { name: `padding-${axis}-${size}`, bundle: 'spacing', css: props, description: `Padding ${label} ${size} (${rem}rem)` };
    })
  ),

  // ─── Spacing: Gap ──────────────────────────────────────────────────────────
  ...([['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]]).map(
    ([size, rem]) => ({ name: `gap-${size}`, bundle: 'spacing', css: `gap: ${rem}rem;`, description: `Gap between flex/grid children ${size} (${rem}rem)` })
  ),
  ...([['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]]).map(
    ([size, rem]) => ({ name: `gap-x-${size}`, bundle: 'spacing', css: `column-gap: ${rem}rem;`, description: `Column gap ${size} (${rem}rem)` })
  ),
  ...([['3xs',0.1],['2xs',0.25],['xs',0.5],['sm',0.75],['md',1],['lg',1.25],['xl',1.5],['2xl',1.75],['3xl',2]]).map(
    ([size, rem]) => ({ name: `gap-y-${size}`, bundle: 'spacing', css: `row-gap: ${rem}rem;`, description: `Row gap ${size} (${rem}rem)` })
  ),

  // ─── Decorations: Border Radius ────────────────────────────────────────────
  { name: 'round-none',   bundle: 'decorations', css: 'border-radius: 0px;',    description: 'No border radius' },
  { name: 'round-full',   bundle: 'decorations', css: 'border-radius: 9999px;', description: 'Pill shape (fully rounded ends)' },
  { name: 'round-circle', bundle: 'decorations', css: 'border-radius: 50%;',    description: 'Circle (use with equal width and height)' },
  { name: 'round',        bundle: 'decorations', css: 'border-radius: 1rem;',   description: 'Default border radius (1rem)' },
  { name: 'round-3xs',    bundle: 'decorations', css: 'border-radius: 0.1rem;',  description: 'Border radius 3xs (0.1rem)' },
  { name: 'round-2xs',    bundle: 'decorations', css: 'border-radius: 0.25rem;', description: 'Border radius 2xs (0.25rem)' },
  { name: 'round-xs',     bundle: 'decorations', css: 'border-radius: 0.5rem;',  description: 'Border radius xs (0.5rem)' },
  { name: 'round-sm',     bundle: 'decorations', css: 'border-radius: 0.75rem;', description: 'Border radius sm (0.75rem)' },
  { name: 'round-md',     bundle: 'decorations', css: 'border-radius: 1rem;',    description: 'Border radius md (1rem)' },
  { name: 'round-lg',     bundle: 'decorations', css: 'border-radius: 1.25rem;', description: 'Border radius lg (1.25rem)' },
  { name: 'round-xl',     bundle: 'decorations', css: 'border-radius: 1.5rem;',  description: 'Border radius xl (1.5rem)' },
  { name: 'round-2xl',    bundle: 'decorations', css: 'border-radius: 1.75rem;', description: 'Border radius 2xl (1.75rem)' },
  { name: 'round-3xl',    bundle: 'decorations', css: 'border-radius: 2rem;',    description: 'Border radius 3xl (2rem)' },

  // ─── Decorations: Shadows ──────────────────────────────────────────────────
  { name: 'shadow-none',     bundle: 'decorations', css: 'box-shadow: none;',                                    description: 'Remove shadow' },
  { name: 'shadow-sm',       bundle: 'decorations', css: 'box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.10);',         description: 'Small drop shadow' },
  { name: 'shadow',          bundle: 'decorations', css: 'box-shadow: 3px 3px 5px 0 rgba(0,0,0,0.10);',         description: 'Default drop shadow (same as shadow-md)' },
  { name: 'shadow-md',       bundle: 'decorations', css: 'box-shadow: 3px 3px 5px 0 rgba(0,0,0,0.10);',         description: 'Medium drop shadow' },
  { name: 'shadow-lg',       bundle: 'decorations', css: 'box-shadow: 5px 5px 8px 0 rgba(0,0,0,0.10);',         description: 'Large drop shadow' },
  { name: 'shadow-xl',       bundle: 'decorations', css: 'box-shadow: 8px 8px 10px 0 rgba(0,0,0,0.10);',        description: 'Extra large drop shadow' },
  { name: 'shadow-2xl',      bundle: 'decorations', css: 'box-shadow: 10px 10px 13px 0 rgba(0,0,0,0.10);',      description: '2× extra large drop shadow' },
  { name: 'shadow-inner-sm', bundle: 'decorations', css: 'box-shadow: inset 2px 2px 3px 0 rgba(0,0,0,0.10);',  description: 'Small inset shadow' },
  { name: 'shadow-inner',    bundle: 'decorations', css: 'box-shadow: inset 3px 3px 5px 0 rgba(0,0,0,0.10);',  description: 'Default inset shadow (same as shadow-inner-md)' },
  { name: 'shadow-inner-md', bundle: 'decorations', css: 'box-shadow: inset 3px 3px 5px 0 rgba(0,0,0,0.10);',  description: 'Medium inset shadow' },
  { name: 'shadow-inner-lg', bundle: 'decorations', css: 'box-shadow: inset 5px 5px 8px 0 rgba(0,0,0,0.10);',  description: 'Large inset shadow' },
  { name: 'shadow-inner-xl', bundle: 'decorations', css: 'box-shadow: inset 8px 8px 10px 0 rgba(0,0,0,0.10);', description: 'Extra large inset shadow' },
  { name: 'shadow-inner-2xl',bundle: 'decorations', css: 'box-shadow: inset 10px 10px 13px 0 rgba(0,0,0,0.10);',description: '2× extra large inset shadow' },

  // ─── Decorations: Border ───────────────────────────────────────────────────
  { name: 'border',        bundle: 'decorations', css: 'border: 1px solid currentColor;',        description: 'Thin border using current text color' },
  { name: 'border-2',      bundle: 'decorations', css: 'border: 2px solid currentColor;',        description: 'Medium border using current text color' },
  { name: 'border-4',      bundle: 'decorations', css: 'border: 4px solid currentColor;',        description: 'Thick border using current text color' },
  { name: 'border-none',   bundle: 'decorations', css: 'border: none;',                          description: 'Remove border' },
  { name: 'border-top',    bundle: 'decorations', css: 'border-top: 1px solid currentColor;',    description: 'Top border only' },
  { name: 'border-right',  bundle: 'decorations', css: 'border-right: 1px solid currentColor;',  description: 'Right border only' },
  { name: 'border-bottom', bundle: 'decorations', css: 'border-bottom: 1px solid currentColor;', description: 'Bottom border only' },
  { name: 'border-left',   bundle: 'decorations', css: 'border-left: 1px solid currentColor;',   description: 'Left border only' },

  // ─── Decorations: Opacity ──────────────────────────────────────────────────
  { name: 'opacity-0',   bundle: 'decorations', css: 'opacity: 0;',    description: 'Fully transparent' },
  { name: 'opacity-25',  bundle: 'decorations', css: 'opacity: 0.25;', description: '25% opacity' },
  { name: 'opacity-50',  bundle: 'decorations', css: 'opacity: 0.5;',  description: '50% opacity' },
  { name: 'opacity-75',  bundle: 'decorations', css: 'opacity: 0.75;', description: '75% opacity' },
  { name: 'opacity-100', bundle: 'decorations', css: 'opacity: 1;',    description: 'Fully opaque' },

  // ─── Interactive: Cursor ───────────────────────────────────────────────────
  { name: 'cursor-pointer',     bundle: 'interactive', css: 'cursor: pointer;',     description: 'Pointer cursor (for clickable elements)' },
  { name: 'cursor-default',     bundle: 'interactive', css: 'cursor: default;',     description: 'Default arrow cursor' },
  { name: 'cursor-not-allowed', bundle: 'interactive', css: 'cursor: not-allowed;', description: 'Not-allowed cursor (for disabled elements)' },
  { name: 'cursor-wait',        bundle: 'interactive', css: 'cursor: wait;',        description: 'Wait/loading cursor' },
  { name: 'cursor-text',        bundle: 'interactive', css: 'cursor: text;',        description: 'Text cursor (for editable content)' },

  // ─── Interactive: Pointer Events ───────────────────────────────────────────
  { name: 'pointer-events-none', bundle: 'interactive', css: 'pointer-events: none;', description: 'Ignore mouse and touch events (clicks pass through)' },
  { name: 'pointer-events-auto', bundle: 'interactive', css: 'pointer-events: auto;', description: 'Restore normal pointer event handling' },
];
