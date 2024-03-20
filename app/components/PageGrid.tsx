import { NavLink } from "@remix-run/react";
import { css } from "styled-system/css";

import { site } from "~/config";

import { Arrow } from "./Arrow";

interface PageGridProps {
	left: React.ReactNode;
	subtitle?: React.ReactNode;
	title: React.ReactNode;
}

const navLink = css.raw({
	padding: "[0]",
	lineHeight: "medium",
	"&:active": {
		textDecoration: "underline",
	},
});

const navLinkWithDot = css.raw({
	"&:not(:first-of-type)::before": {
		background: "foreground",
		borderRadius: "[100%]",
		content: `[""]`,
		display: "inline-block",
		height: "[0.3em]",
		margin: "[0 0.5em 0.15em]",
		position: "relative",
		width: "[0.3em]",
	},
});

const pageGridHeaderAndFooter = css.raw({
	position: "fixed",
	right: "[2rem]",
	width: "[50%]",
});

export function PageGrid({ left, subtitle, title }: PageGridProps) {
	return (
		<div
			className={css({
				display: "grid",
				gridGap: "[0 4rem]",
				gridTemplate: "[minmax(min-content, max-content) / minmax(100%, 1fr)]",
				gridTemplateAreas: '["header" "left" "footer"]',
				height: "[100%]",
				margin: "auto",
				padding: "[2rem]",
				position: "relative",
				width: "[100%]",
				medium: {
					gridTemplateColumns: "[minmax(40%, 1fr) 1fr]",
				},
			})}
		>
			<header
				className={css(
					{
						display: "flex",
						flexDirection: "column",
						gridArea: "[header]",
						medium: {
							textAlign: "right",
							top: "[2rem]",
							zIndex: "[1]",
						},
					},
					pageGridHeaderAndFooter
				)}
			>
				<h1
					className={css({
						fontSize: "title",
						fontWeight: "title",
						lineHeight: "title",
						margin: "[0]",
						padding: "[0]",
					})}
				>
					{title}
				</h1>
				{subtitle && (
					<NavLink
						className={css({
							fontSize: "larger",
							fontWeight: "title",
							textTransform: "uppercase",
						})}
						reloadDocument
						to="/"
					>
						{site.title}
						<Arrow direction="back" label="Back indication arrow" />
					</NavLink>
				)}
			</header>
			<main
				className={css({
					gridArea: "[left]",
					medium: {
						paddingBottom: "[2rem]",
					},
				})}
			>
				{left}
			</main>
			<footer
				className={css(
					{
						alignContent: "flex-end",
						alignItems: "baseline",
						display: "flex",
						flexWrap: "wrap",
						fontSize: "medium",
						fontWeight: "large",
						gridArea: "[footer]",
						height: "[100%]",
						justifyContent: "flex-start",
						medium: {
							alignSelf: "flex-end",
							bottom: "[2rem]",
							height: "auto",
							justifyContent: "flex-end",
						},
					},
					pageGridHeaderAndFooter
				)}
			>
				<NavLink className={css(navLink)} reloadDocument to="/about">
					About
				</NavLink>
				<NavLink
					className={css(navLink, navLinkWithDot)}
					reloadDocument
					to="/code-of-conduct"
				>
					Code of Conduct
				</NavLink>
				<span className={css({ flexBasis: "[100%]" })} />
				<NavLink className={css(navLink)} reloadDocument to="/events">
					Events
				</NavLink>
				<NavLink
					className={css(navLink, navLinkWithDot)}
					reloadDocument
					to="/sponsors"
				>
					Sponsors
				</NavLink>
				<span className={css({ flexBasis: "[100%]" })} />
				<NavLink className={css(navLink)} reloadDocument to="/join-us">
					Join Us
				</NavLink>
			</footer>
		</div>
	);
}
