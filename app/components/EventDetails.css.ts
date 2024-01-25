import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

const base = style({
	margin: "2.5rem 0 1.5rem 0",
	selectors: {
		"& + &": {
			marginTop: "3rem",
		},
	},
});

export const eventDetails = styleVariants({
	light: [
		base,
		{
			fontWeight: vars.font.weight.light,
		},
	],
	medium: [base],
});

export const date = style({
	fontSize: vars.font.size.large,
	marginBottom: "1rem",
});

export const topics = style({
	margin: "2rem 0 1rem",
});

export const topic = style({
	margin: "0.25rem 0",
});
