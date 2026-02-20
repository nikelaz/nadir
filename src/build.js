import fs from 'node:fs';
import path from 'node:path';
import { BUNDLES } from './config.js';
import { minifyCss } from './helpers.js';

import generateSpacing from './generators/spacing.js';
import generateTypography from './generators/typography.js';
import generateRoundness from './generators/roundness.js';

const generators = {
    'spacing': generateSpacing,
    'typography': generateTypography,
    'roundness': generateRoundness,
};

const DIST_DIR = path.resolve('dist');

async function build() {
    const start = process.hrtime.bigint();

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    for (const bundle of BUNDLES) {
        let bundleCss = '';

        for (const input of bundle.inputs) {
            if (input.type === 'generator') {
                const generatorFn = generators[input.name];
                if (generatorFn) {
                    bundleCss += generatorFn();
                } else {
                    console.error(`Unknown generator: ${input.name}`);
                }
            } else if (input.type === 'file') {
                try {
                    const fileContent = fs.readFileSync(path.resolve(input.path), 'utf8');
                    bundleCss += fileContent + '\n';
                } catch (e) {
                    console.error(`Failed to read input file: ${input.path}`);
                }
            }
        }

        const outPath = path.join(DIST_DIR, `${bundle.name}.css`);
        const outMinPath = path.join(DIST_DIR, `${bundle.name}.min.css`);

        // Write normal CSS
        fs.writeFileSync(outPath, bundleCss);
        console.log(`Created: ${bundle.name}.css (${Buffer.byteLength(bundleCss)} bytes)`);

        // Write minified CSS
        try {
            const minifiedCss = minifyCss(bundleCss);
            fs.writeFileSync(outMinPath, minifiedCss);
            console.log(`Created: ${bundle.name}.min.css (${Buffer.byteLength(minifiedCss)} bytes)`);
        } catch (e) {
            console.error(`Failed to minify bundle: ${bundle.name}`);
        }
    }

    const end = process.hrtime.bigint();
    const elapsed = Number(end - start) / 1e6;
    console.log(`Execution time: ${elapsed.toFixed(2)}ms`);
}

build();
