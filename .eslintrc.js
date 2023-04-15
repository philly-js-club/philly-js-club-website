/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		"@remix-run/eslint-config",
		"@remix-run/eslint-config/node",
		"eslint:recommended",
		"plugin:eslint-comments/recommended",
		"plugin:regexp/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	overrides: [
		{
			extends: ["plugin:markdown/recommended"],
			files: ["**/*.md"],
			processor: "markdown/markdown",
		},
		{
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:typescript-sort-keys/recommended",
			],
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
		},
		{
			extends: [
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:@typescript-eslint/strict",
			],
			excludedFiles: ["**/*.md/*.ts"],
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: true,
			},
			rules: {
				// These off-by-default rules work well for this repo and we like them on.
				"deprecation/deprecation": "error",
			},
		},
		{
			files: ["*.json", "*.jsonc"],
			excludedFiles: ["package.json"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/sort-keys": "error",
			},
			extends: ["plugin:jsonc/recommended-with-json"],
		},
		{
			files: ["**/*.{yml,yaml}"],
			parser: "yaml-eslint-parser",
			extends: ["plugin:yml/standard", "plugin:yml/prettier"],
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
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"deprecation",
		"regexp",
		"react",
		"react-hooks",
		"simple-import-sort",
		"typescript-sort-keys",
	],
	root: true,
	rules: {
		// These off-by-default rules work well for this repo and we like them on.
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"react/jsx-sort-props": "error",

		// These on-by-default rules don't work well for this repo and we like them off.
		"no-undef": "off",

		// Stylistic concerns that don't interfere with Prettier
		"padding-line-between-statements": "off",
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" },
		],
	},
};
