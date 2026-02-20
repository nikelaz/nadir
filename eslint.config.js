import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.all,
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: {
                ...globals.es2021,
                ...globals.node
            },
            sourceType: "module"
        },
        rules: {
            "capitalized-comments": "off",
            "func-style": "off",
            "id-length": "off",
            "max-lines-per-function": "off",
            "max-statements": "off",
            "no-console": "off",
            "no-magic-numbers": "off",
            "no-unused-vars": "off",
            "one-var": "off",
            "require-await": "off",
            "sort-imports": "off",
            "sort-keys": "off",
            "sort-vars": "off"
        }
    }
];
