import { transform } from 'lightningcss';

export function minifyCss(cssString) {
    try {
        const { code } = transform({
            code: Buffer.from(cssString),
            minify: true,
            sourceMap: false
        });
        return code.toString();
    } catch (e) {
        console.error("Error minifying CSS:", e);
        throw e;
    }
}
