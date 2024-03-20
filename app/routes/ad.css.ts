import { style } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

export const ad = style({
	alignItems: "center",
	background: vars.color.foreground,
	color: vars.color.background,
	display: "flex",
	flexDirection: "column",
	gap: "4rem",
	height: "100%",
	justifyContent: "center",
	width: "100%",
	"@media": {
		"(width >= 700px)": {
			flexDirection: "row",
			gap: "2rem",
			justifyContent: "center",
			padding: "2rem",
		},
	},
});

export const imgArea = style({
	"@media": {
		"(width >= 700px)": {
			textAlign: "right",
			width: "50%",
		},
	},
});

export const img = style({
	height: "min(50vw, 50vh)",
	width: "min(50vw, 50vh)",
	"@media": {
		"(width >= 700px)": {
			height: "40vh",
			width: "40vh",
		},
		"(width >= 1400px)": {
			height: "50vh",
			width: "50vh",
		},
	},
});
