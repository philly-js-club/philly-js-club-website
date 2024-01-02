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
	theme: {
		tokens: {
			fontSizes: {
				smallerJosh: { value: "clamp(1.5rem, 2vw, 2rem)" },
				smallJosh: { value: "clamp(1.5rem, 4vw, 2rem)" },
				// token(fontSizes.large) maybe?
				mediumJosh: { value: "clamp(1.5rem, 4vw, {fontSizes.large}" },
				largeJosh: { value: "clamp(2rem, 4vw, 3rem)" },
				largerJosh: { value: "clamp(2.5rem, 5vw, 5rem)" },
				titleJosh: { value: "clamp(7rem, 13vw, 15rem)" },

				wat: { value: "123px" },
			},
		},
	},
});
