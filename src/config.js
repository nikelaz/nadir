export const BUNDLES = [
  {
    inputs: [
      { path: 'src/static/reset.css', type: 'file' },
    ],
    name: 'nadir-reset'
  },
  {
    inputs: [
      { name: 'typography', type: 'generator' }
    ],
    name: 'nadir-typography'
  },
  {
    inputs: [
      { name: 'spacing', type: 'generator' }
    ],
    name: 'nadir-spacing'
  },
  {
    inputs: [
      { path: 'src/static/layout/stack.css', type: 'file' },
      { path: 'src/static/layout/alignment.css', type: 'file' },
      { path: 'src/static/layout/wrap.css', type: 'file' },
      { path: 'src/static/layout/display.css', type: 'file' },
      { path: 'src/static/layout/position.css', type: 'file' },
    ],
    name: 'nadir-layout'
  },
  {
    inputs: [
      { name: 'roundness', type: 'generator' },
      { path: 'src/static/shadow.css', type: 'file' }
    ],
    name: 'nadir-decorations'
  },
  {
    inputs: [
      { path: 'src/static/reset.css', type: 'file' },
      { name: 'typography', type: 'generator' },
      { name: 'spacing', type: 'generator' },
      { path: 'src/static/layout/stack.css', type: 'file' },
      { path: 'src/static/layout/alignment.css', type: 'file' },
      { path: 'src/static/layout/wrap.css', type: 'file' },
      { path: 'src/static/layout/display.css', type: 'file' },
      { path: 'src/static/layout/position.css', type: 'file' },
      { name: 'roundness', type: 'generator' },
      { path: 'src/static/shadow.css', type: 'file' },
    ],
    name: 'nadir'
  },
],
  DIRECTIONS = ['top', 'right', 'bottom', 'left', 'x', 'y'],
  FONT_FAMILIES = [
    { name: 'base', value: 'var(--nadir-ff-base)' },
    { name: 'display', value: 'var(--nadir-ff-display)' },
  ],
  FONT_WEIGHTS = [
    { name: 'thin', value: 200 },
    { name: 'light', value: 300 },
    { name: 'regular', value: 400 },
    { name: 'medium', value: 500 },
    { name: 'semibold', value: 600 },
    { name: 'bold', value: 700 },
    { name: 'black', value: 900 },
  ],
  LETTER_SPACINGS = [
    { name: 'tighter', value: '-0.05em' },
    { name: 'tight', value: '-0.025em' },
    { name: 'normal', value: '0em' },
    { name: 'wide', value: '0.025em' },
    { name: 'wider', value: '0.05em' },
    { name: 'widest', value: '0.1em' },
  ],
  LINE_HEIGHTS = [
    { name: 'none', value: 1 },
    { name: 'tight', value: 1.25 },
    { name: 'snug', value: 1.375 },
    { name: 'normal', value: 1.5 },
    { name: 'relaxed', value: 1.625 },
    { name: 'loose', value: 2 },
  ],
  SIZES = [
    { name: '3xs', rem: 0.1 },
    { name: '2xs', rem: 0.25 },
    { name: 'xs', rem: 0.5 },
    { name: 'sm', rem: 0.75 },
    { name: 'md', rem: 1.0 },
    { name: 'lg', rem: 1.25 },
    { name: 'xl', rem: 1.5 },
    { name: '2xl', rem: 1.75 },
    { name: '3xl', rem: 2.0 },
  ];
