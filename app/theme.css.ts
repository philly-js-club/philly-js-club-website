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
});

export const fonts = styleVariants({
	medium: {
		fontSize: vars.font.size.medium,
		fontWeight: vars.font.weight.medium,
	},
});
