import { NavLink } from "@remix-run/react";

import { site } from "~/config";

import { Arrow } from "./Arrow";

interface PageGridProps {
	left: React.ReactNode;
	subtitle?: React.ReactNode;
	title: React.ReactNode;
}

export function PageGrid({ left, subtitle, title }: PageGridProps) {
	return (
		<div className="page-grid">
			<header className="page-grid-header">
				<h1 className="page-grid-title">{title}</h1>
				{subtitle && (
					<NavLink className="page-grid-subtitle" reloadDocument to="/">
						{site.title}
						<Arrow
							className="arrow-back"
							label="Back indication arrow"
							variant="back"
						/>
					</NavLink>
				)}
			</header>
			<main className="page-grid-left">{left}</main>
			<footer className="page-grid-footer">
				<NavLink className="page-grid-footer-link" reloadDocument to="/about">
					About
				</NavLink>
				<NavLink
					className="page-grid-footer-link"
					reloadDocument
					to="/code-of-conduct"
				>
					Code of Conduct
				</NavLink>
				<span className="page-grid-footer-separator" />
				<NavLink className="page-grid-footer-link" reloadDocument to="/events">
					Events
				</NavLink>
				<NavLink
					className="page-grid-footer-link"
					reloadDocument
					to="/sponsors"
				>
					Sponsors
				</NavLink>
				<span className="page-grid-footer-separator" />
				<NavLink className="page-grid-footer-link" reloadDocument to="/join-us">
					Join Us
				</NavLink>
			</footer>
		</div>
	);
}
