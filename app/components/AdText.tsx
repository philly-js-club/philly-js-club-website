// We deploy to static pages, so this must be a client-only component.
// https://github.com/philly-js-club/philly-js-club-website/issues/61
"use client";

import { site } from "~/config";
import { upperFirst } from "~/utils/common";
import { useMonthAndYear } from "~/utils/dates";

import * as styles from "./AdText.css";

export function AdText() {
	const { month, year } = useMonthAndYear();

	return (
		<div className={styles.adText}>
			<h1 className={styles.h1}>{site.title}</h1>
			<p className={styles.p}>
				{upperFirst(month)} {year}
			</p>
		</div>
	);
}
