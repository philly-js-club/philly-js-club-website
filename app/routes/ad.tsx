import type { V2_MetaFunction } from "@remix-run/react";
import { useSearchParams } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";
import site from "~/config/site";
import { constructSiteTitle, upperFirst } from "~/utils/common";

export const meta: V2_MetaFunction = ({ location }) => {
	const params = new URLSearchParams(location.search);
	const { month, year } = getMonthAndYear(params);
	let pageTitle = "Ad";
	if (!isValidMonth(month) || !isValidYear(year)) {
		return [{ title: constructSiteTitle(pageTitle) }];
	}

	pageTitle = `Ad (${upperFirst(month)} ${year})`;
	return [{ title: constructSiteTitle(pageTitle) }];
};

export default function Ad() {
	const [params] = useSearchParams();
	const { month, year } = getMonthAndYear(params);

	if (!isValidMonth(month)) {
		return "nope (month)";
	}

	if (!isValidYear(year)) {
		return "nope (year)";
	}

	return (
		<main className="ad-main">
			<div className="ad-img-area">
				<AdLogo className="ad-img" />
			</div>
			<div className="ad-text">
				<h1>{site.title}</h1>
				<p>
					{upperFirst(month)} {year}
				</p>
			</div>
		</main>
	);
}

function getMonthAndYear(params: URLSearchParams) {
	const month = params.get("month")?.toLowerCase() ?? "idk";
	const year = params.get("year")?.toLowerCase() ?? "when";
	return { month, year };
}

function isValidMonth(month: string) {
	const monthNames = new Set([
		"january",
		"february",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december",
	]);

	return monthNames.has(month);
}

function isValidYear(year: string) {
	return /\d{4}/.test(year);
}
