export const SIZES = [
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

export const DIRECTIONS = ['top', 'right', 'bottom', 'left', 'x', 'y'];

export const FONT_FAMILIES = [
  { name: 'base', value: 'var(--nadir-ff-base)' },
  { name: 'display', value: 'var(--nadir-ff-display)' },
]

export const FONT_WEIGHTS = [
  { name: 'thin', value: 200 },
  { name: 'light', value: 300 },
  { name: 'regular', value: 400 },
  { name: 'medium', value: 500 },
  { name: 'semibold', value: 600 },
  { name: 'bold', value: 700 },
  { name: 'black', value: 900 },
];

export const LINE_HEIGHTS = [
  { name: 'none', value: 1 },
  { name: 'tight', value: 1.25 },
  { name: 'snug', value: 1.375 },
  { name: 'normal', value: 1.5 },
  { name: 'relaxed', value: 1.625 },
  { name: 'loose', value: 2 },
];

export const LETTER_SPACINGS = [
  { name: 'tighter', value: '-0.05em' },
  { name: 'tight', value: '-0.025em' },
  { name: 'normal', value: '0em' },
  { name: 'wide', value: '0.025em' },
  { name: 'wider', value: '0.05em' },
  { name: 'widest', value: '0.1em' },
];

export const BUNDLES = [
  {
    name: 'nadir-reset',
    inputs: [
      { type: 'file', path: 'src/static/reset.css' },
    ]
  },
  {
    name: 'nadir-typography',
    inputs: [
      { type: 'generator', name: 'typography' }
    ]
  },
  {
    name: 'nadir-spacing',
    inputs: [
      { type: 'generator', name: 'spacing' }
    ]
  },
  {
    name: 'nadir-layout',
    inputs: [
      { type: 'file', path: 'src/static/layout/stack.css' },
      { type: 'file', path: 'src/static/layout/alignment.css' },
      { type: 'file', path: 'src/static/layout/wrap.css' },
      { type: 'file', path: 'src/static/layout/display.css' },
      { type: 'file', path: 'src/static/layout/position.css' },
    ]
  },
  {
    name: 'nadir-decorations',
    inputs: [
      { type: 'generator', name: 'roundness' },
      { type: 'file', path: 'src/static/shadow.css' }
    ]
  },
  {
    name: 'nadir',
    inputs: [
      { type: 'file', path: 'src/static/reset.css' },
      { type: 'generator', name: 'typography' },
      { type: 'generator', name: 'spacing' },
      { type: 'file', path: 'src/static/layout/stack.css' },
      { type: 'file', path: 'src/static/layout/alignment.css' },
      { type: 'file', path: 'src/static/layout/wrap.css' },
      { type: 'file', path: 'src/static/layout/display.css' },
      { type: 'file', path: 'src/static/layout/position.css' },
      { type: 'generator', name: 'roundness' },
      { type: 'file', path: 'src/static/shadow.css' },
    ]
  },
];
