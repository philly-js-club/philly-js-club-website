import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/theme.css";

const headerAndFooter = style({
	"@media": {
		"(width >= 1000px)": {
			position: "fixed",
			right: "2rem",
			width: "50%",
		},
	},
});

export const pageGrid = style({
	display: "grid",
	gridGap: "0 4rem",
	gridTemplate: "minmax(min-content, max-content) / minmax(100%, 1fr)",
	gridTemplateAreas: '"header" "left" "footer"',
	height: "100%",
	margin: "auto",
	padding: "2rem",
	position: "relative",
	width: "100%",

	"@media": {
		"(width >= 1000px)": {
			gridTemplateColumns: "minmax(40%, 1fr) 1fr",
		},
	},
});

export const header = style([
	headerAndFooter,
	{
		display: "flex",
		flexDirection: "column",
		gridArea: "header",
		"@media": {
			"(width >= 1000px)": {
				textAlign: "right",
				top: "2rem",
				zIndex: "1",
			},
		},
	},
]);

export const footer = style([
	headerAndFooter,
	{
		alignContent: "flex-end",
		alignItems: "baseline",
		display: "flex",
		flexWrap: "wrap",
		fontSize: vars.font.size.medium,
		fontWeight: vars.font.weight.large,
		gridArea: "footer",
		height: "100%",
		justifyContent: "flex-start",
		"@media": {
			"(width >= 1000px)": {
				alignSelf: "flex-end",
				bottom: "2rem",
				height: "auto",
				justifyContent: "flex-end",
			},
		},
	},
]);

export const title = style({
	fontSize: vars.font.size.title,
	fontWeight: vars.font.weight.title,
	lineHeight: vars.lineHeight.title,
});

export const left = style({
	gridArea: "left",
	"@media": {
		"(width >= 1000px)": {
			paddingBottom: "2rem",
		},
	},
});

export const subtitle = style({
	fontSize: vars.font.size.larger,
	fontWeight: vars.font.weight.title,
	textTransform: "uppercase",
});

const footerLinkBase = style({
	padding: "0",
	selectors: {
		"&:active": {
			textDecoration: "underline",
		},
	},
});

export const footerLink = styleVariants({
	inline: [
		footerLinkBase,
		{
			selectors: {
				"&::before": {
					background: "var(--color-foreground)",
					borderRadius: "100%",
					content: '""',
					display: "inline-block",
					height: "0.3em",
					margin: "0 0.5em 0.15em",
					position: "relative",
					width: "0.3em",
				},
			},
		},
	],
	starter: [footerLinkBase],
});

export const footerSeparator = style({
	flexBasis: "100%",
});
