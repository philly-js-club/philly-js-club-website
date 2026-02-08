import jseslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			"build/**",
			"node_modules/**",
			"playwright-report/**",
			"package-lock.json",
			"pnpm-lock.yaml",
			"test-results/**",
		],
	},
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	jseslint.configs.recommended,
	...tseslint.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
