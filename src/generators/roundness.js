import { SIZES } from '../config.js';

export default function generateRoundness() {
  let css = '';

  // Round-none, round-full
  css += `.round-none { border-radius: 0px; }\n`;
  css += `.round-full { border-radius: 9999px; }\n`;
  css += `.round-circle { border-radius: 50%; }\n`;

  // Default roundness class
  const mdSize = SIZES.find(size => size.name === 'md');
  css += `.round { border-radius: ${mdSize.rem}rem; }\n`; 

  // .round-<size>
  for (const size of SIZES) {
    css += `.round-${size.name} { border-radius: ${size.rem}rem; }\n`;
  }

  return css;
}
