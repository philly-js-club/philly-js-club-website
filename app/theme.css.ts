import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		background: "#efdb4f",
		foreground: "#323330",
	},
	font: {
		body: "arial",
	},
});
