import { BUNDLES } from './config.js';
import fs from 'node:fs';
import generateRoundness from './generators/roundness.js';
import generateSpacing from './generators/spacing.js';
import generateTypography from './generators/typography.js';
import { minifyCss } from './helpers.js';
import path from 'node:path';

const DIST_DIR = path.resolve('dist'),
    generators = {
        roundness: generateRoundness,
        spacing: generateSpacing,
        typography: generateTypography,
    },
    million = 1e6,
    two = 2;

const buildBundle = function buildBundle(bundle) {
    let bundleCss = '';

    for (const input of bundle.inputs) {
        if (input.type === 'generator') {
            const generatorFn = generators[input.name];
            if (generatorFn) {
                bundleCss += generatorFn();
            } else {
                process.stdout.write(`Unknown generator: ${input.name}\n`);
            }
        } else if (input.type === 'file') {
            try {
                const fileContent = fs.readFileSync(path.resolve(input.path), 'utf8');
                bundleCss += `${fileContent}\n`;
            } catch (err) {
                process.stdout.write(`Failed to read input file: ${input.path} - ${String(err)}\n`);
            }
        }
    }

    const outMinPath = path.join(DIST_DIR, `${bundle.name}.min.css`),
        outPath = path.join(DIST_DIR, `${bundle.name}.css`);

    fs.writeFileSync(outPath, bundleCss);
    process.stdout.write(`Created: ${bundle.name}.css (${Buffer.byteLength(bundleCss)} bytes)\n`);

    try {
        const minifiedCss = minifyCss(bundleCss);
        fs.writeFileSync(outMinPath, minifiedCss);
        process.stdout.write(`Created: ${bundle.name}.min.css (${Buffer.byteLength(minifiedCss)} bytes)\n`);
    } catch (err) {
        process.stdout.write(`Failed to minify bundle: ${bundle.name} - ${String(err)}\n`);
    }
};

const build = function build() {
    const start = process.hrtime.bigint();

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    for (const bundle of BUNDLES) {
        buildBundle(bundle);
    }

    const end = process.hrtime.bigint(),
        elapsed = Number(end - start) / million;
    process.stdout.write(`Execution time: ${elapsed.toFixed(two)}ms\n`);

    return Promise.resolve();
};

build().catch(err => {
    process.stdout.write(String(err));
});
