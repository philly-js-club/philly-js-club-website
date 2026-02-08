import jseslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import regexpPlugin from "eslint-plugin-regexp";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginYml from "eslint-plugin-yml";
import globals from "globals";
import tseslint from "typescript-eslint";

const jsFiles = ["**/*.{js,mjs,cjs,ts,jsx,tsx}"];
const tsFiles = ["**/*.ts", "**/*.tsx"];

/** @type {import('eslint').Linter.Config[]} */
export default [
	// Global ignores
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

	// Base JS config — scoped to JS/TS files
	{
		files: jsFiles,
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		...jseslint.configs.recommended,
	},

	// ESLint Comments recommended — scoped to JS/TS files
	{
		files: jsFiles,
		...comments.recommended,
	},

	// Regexp recommended — scoped to JS/TS files
	{
		files: jsFiles,
		...regexpPlugin.configs["flat/recommended"],
	},

	// React recommended + JSX runtime
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	// React Hooks
	reactHooks.configs.flat.recommended,

	// TypeScript strict (without type-checking)
	...tseslint.configs.strict.map((config) => ({
		...config,
		files: tsFiles,
	})),

	// TypeScript strict-type-checked + stylistic-type-checked (with type-checking)
	...tseslint.configs.strictTypeChecked.map((config) => ({
		...config,
		files: tsFiles,
	})),
	...tseslint.configs.stylisticTypeChecked.map((config) => ({
		...config,
		files: tsFiles,
	})),
	{
		files: tsFiles,
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			// Replace deprecated typescript-sort-keys with built-in rule
			"@typescript-eslint/member-ordering": "error",
		},
	},

	// JSON
	...eslintPluginJsonc.configs["flat/recommended-with-json"],
	{
		files: ["*.json", "*.jsonc"],
		ignores: ["package.json"],
		rules: {
			"jsonc/sort-keys": "error",
		},
	},

	// YAML
	...eslintPluginYml.configs["flat/standard"],
	...eslintPluginYml.configs["flat/prettier"],
	{
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": ["error", { extension: "yml" }],
			"yml/sort-keys": [
				"error",
				{
					order: { type: "asc" },
					pathPattern: "^.*$",
				},
			],
			"yml/sort-sequence-values": [
				"error",
				{
					order: { type: "asc" },
					pathPattern: "^.*$",
				},
			],
		},
	},

	// Simple import sort + custom rules (for JS/TS files)
	{
		files: jsFiles,
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
			"react/jsx-sort-props": "error",

			"no-undef": "off",
		},
	},
];
