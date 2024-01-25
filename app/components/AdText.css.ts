import { style } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

export const adText = style({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	textAlign: "center",
	"@media": {
		"(width >= 700px)": {
			textAlign: "left",
			width: "50%",
		},
		"(width >= 1000px)": {
			alignContent: "flex-start",
		},
	},
});

export const h1 = style({
	fontSize: "5rem",
	fontWeight: vars.font.weight.title,
	lineHeight: 0.85,
	margin: "0 15vw",
	textTransform: "uppercase",
	"@media": {
		"(width >= 700px)": {
			margin: "0",
		},
		"(width >= 1000px)": {
			fontSize: "7rem",
		},
		"(width >= 1400px)": {
			fontSize: "10rem",
		},
	},
});

export const p = style({
	fontSize: vars.font.size.larger,
	fontWeight: vars.font.weight.large,
});
