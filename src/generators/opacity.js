import { OPACITIES } from '../config.js';

export default function generateOpacity() {
  let css = '';
  for (const opacity of OPACITIES) {
    css += `.opacity-${opacity.name} { opacity: ${opacity.value}; }\n`;
  }
  return css;
}
