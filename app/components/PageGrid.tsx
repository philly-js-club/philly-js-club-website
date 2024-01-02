import { NavLink } from "@remix-run/react";
import { css } from "styled-system/css";

import { site } from "~/config";

import { Arrow } from "./Arrow";

interface PageGridProps {
	left: React.ReactNode;
	subtitle?: React.ReactNode;
	title: React.ReactNode;
}

const navLink = css({
	padding: "[0]",
	"&:active": {
		textDecoration: "underline",
	},
	// Todo: find another way lol
	// &:not(:first-of-type, .page-grid-footer-separator + &)
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

export function PageGrid({ left, subtitle, title }: PageGridProps) {
	return (
		<div className="page-grid">
			<header className="page-grid-header">
				<h1 className="page-grid-title">{title}</h1>
				{subtitle && (
					<NavLink className="page-grid-subtitle" reloadDocument to="/">
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
				className={css({
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
				})}
			>
				<NavLink className={navLink} reloadDocument to="/about">
					About
				</NavLink>
				<NavLink className={navLink} reloadDocument to="/code-of-conduct">
					Code of Conduct
				</NavLink>
				<span /* className="page-grid-footer-separator" */ />
				<NavLink className={navLink} reloadDocument to="/events">
					Events
				</NavLink>
				<NavLink className={navLink} reloadDocument to="/sponsors">
					Sponsors
				</NavLink>
				<span className={css({ flexBasis: "[100%]" })} />
				<NavLink className={navLink} reloadDocument to="/join-us">
					Join Us
				</NavLink>
			</footer>
		</div>
	);
}
