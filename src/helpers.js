import { transform } from 'lightningcss';

export const minifyCss = function minifyCss(cssString) {
    try {
        const { code } = transform({
            code: Buffer.from(cssString),
            minify: true,
            sourceMap: false
        });
        return code.toString();
    } catch (err) {
        process.stdout.write(`Error minifying CSS: ${String(err)}\n`);
        throw err;
    }
};
