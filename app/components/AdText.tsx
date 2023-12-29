// We deploy to static pages, so this must be a client-only component.
// https://github.com/philly-js-club/philly-js-club-website/issues/61
"use client";

import { site } from "~/config";
import { upperFirst } from "~/utils/common";
import { useMonthAndYear } from "~/utils/dates";

export function AdText() {
	const { month, year } = useMonthAndYear();

	return (
		<div className="ad-text">
			<h1>{site.title}</h1>
			<p>
				{upperFirst(month)} {year}
			</p>
		</div>
	);
}
