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
	strictTokens: true,
	theme: {
		breakpoints: {
			small: "700px",
			medium: "1000px",
			large: "1400px",
		},
		textStyles: {
			body: {
				value: {
					fontSize: "{fontSizes.medium}",
					fontWeight: "{fontSizes.light}",
					lineHeight: "{fontSizes.medium}",
				},
			},
			large: {
				value: {
					fontSize: "{fontSizes.large}",
					fontWeight: "{fontWeights.large}",
				},
			},
			larger: {
				value: {
					fontSize: "{fontSizes.larger}",
					fontWeight: "{fontWeights.larger}",
				},
			},
			medium: {
				value: {
					fontSize: "{fontSizes.medium}",
					fontWeight: "{fontWeights.medium}",
				},
			},
			smaller: {
				value: {
					fontSize: "{fontSizes.smaller}",
					fontWeight: "{fontWeights.smaller}",
				},
			},
			underline: {
				value: {
					textDecoration: "underline",
				},
			},
		},
		tokens: {
			colors: {
				background: { value: "#efdb4f" },
				foreground: { value: "#323330" },
			},
			fontSizes: {
				smaller: { value: "clamp(1.5rem, 2vw, 2rem)" },
				small: { value: "clamp(1.5rem, 4vw, 2rem)" },
				medium: { value: "clamp(1.5rem, 4vw, {fontSizes.large})" },
				large: { value: "clamp(2rem, 4vw, 3rem)" },
				larger: { value: "clamp(2.5rem, 5vw, 5rem)" },
				title: { value: "clamp(7rem, 13vw, 15rem)" },
			},
			fontWeights: {
				light: { value: 400 },
				medium: { value: 600 },
				large: { value: 700 },
				larger: { value: 700 },
				title: { value: 900 },
			},
			lineHeights: {
				medium: { value: "clamp(1.5rem, 6vw, {fontSizes.medium})" },
				title: { value: "clamp(5.5rem, 12vw, 12rem)" },
			},
		},
	},
});
