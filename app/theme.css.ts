import { createTheme, styleVariants } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		background: "#efdb4f",
		foreground: "#323330",
	},
	font: {
		size: {
			smaller: "clamp(1.5rem, 2vw, 2rem)",
			small: "clamp(1.5rem, 4vw, 2rem)",
			medium: "clamp(1.5rem, 4vw, var(--font-size-large))",
			large: "clamp(2rem, 4vw, 3rem)",
			larger: "clamp(2.5rem, 5vw, 5rem)",
			title: "clamp(7rem, 13vw, 15rem)",
		},
		weight: {
			light: "400",
			medium: "600",
			large: "700",
			larger: "700",
			title: "900",
		},
	},
	lineHeight: {
		medium: "clamp(1.5rem, 6vw, var(--font-size-medium))",
		title: "clamp(5.5rem, 12vw, 12rem)",
	},
});

export const fonts = styleVariants({
	body: {
		fontSize: vars.font.size.medium,
		fontWeight: vars.font.weight.light,
		lineHeight: vars.lineHeight.medium,
	},
	larger: {
		fontSize: vars.font.size.larger,
		fontWeight: vars.font.weight.larger,
	},
	large: {
		fontSize: vars.font.size.large,
		fontWeight: vars.font.weight.large,
	},
	medium: {
		fontSize: vars.font.size.medium,
		fontWeight: vars.font.weight.medium,
	},
	smaller: {
		fontSize: vars.font.size.small,
	},
});
