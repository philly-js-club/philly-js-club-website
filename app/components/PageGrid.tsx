import { NavLink } from "@remix-run/react";

import { site } from "~/config";

import { Arrow } from "./Arrow";
import * as styles from "./PageGrid.css";

interface PageGridProps {
	left: React.ReactNode;
	subtitle?: React.ReactNode;
	title: React.ReactNode;
}

export function PageGrid({ left, subtitle, title }: PageGridProps) {
	return (
		<div className={styles.pageGrid}>
			<header className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				{subtitle && (
					<NavLink className={styles.subtitle} reloadDocument to="/">
						{site.title}
						<Arrow label="Back indication arrow" variant="back" />
					</NavLink>
				)}
			</header>
			<main className={styles.left}>{left}</main>
			<footer className={styles.footer}>
				<NavLink
					className={styles.footerLink.starter}
					reloadDocument
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					className={styles.footerLink.inline}
					reloadDocument
					to="/code-of-conduct"
				>
					Code of Conduct
				</NavLink>
				<span className={styles.footerSeparator} />
				<NavLink
					className={styles.footerLink.starter}
					reloadDocument
					to="/events"
				>
					Events
				</NavLink>
				<NavLink
					className={styles.footerLink.inline}
					reloadDocument
					to="/sponsors"
				>
					Sponsors
				</NavLink>
				<span className={styles.footerSeparator} />
				<NavLink
					className={styles.footerLink.starter}
					reloadDocument
					to="/join-us"
				>
					Join Us
				</NavLink>
			</footer>
		</div>
	);
}
