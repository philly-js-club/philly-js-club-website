import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	include: [
		"./app/routes/**/*.{ts,tsx,js,jsx}",
		"./app/components/**/*.{ts,tsx,js,jsx}",
	],
	outdir: "styled-system",
	outExtension: "js",
	preflight: true,
});
