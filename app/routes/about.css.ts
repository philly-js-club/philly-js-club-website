import { style } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

export const padded = style({
	margin: "2.5rem 0",
});

export const team = style({
	margin: "5rem 0 2.5rem",
});

export const text = style({
	fontSize: vars.font.size.small,
	margin: "1rem 0 2rem",
});

export const a = style({
	textDecoration: "underline",
});
