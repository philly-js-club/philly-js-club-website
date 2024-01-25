import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		background: "#efdb4f",
		foreground: "#323330",
	},
	font: {
		weight: {
			light: "400",
			medium: "600",
			large: "700",
			larger: "700",
			title: "900",
		},
	},
});
