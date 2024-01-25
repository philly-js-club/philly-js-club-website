import { style } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

export const arrow = style({
	border: "solid 5px red",
	background: vars.color.brand,
	color: "#454545",
});
