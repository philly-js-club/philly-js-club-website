import type { V2_MetaFunction } from "@remix-run/react";
import { useSearchParams } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";

export const meta: V2_MetaFunction = ({ location }) => {
	const params = new URLSearchParams(location.search);
	const { month, year } = getMonthAndYear(params);

	if (!isValidMonth(month) || !isValidYear(year)) {
		return [{ title: "Ad | Philly JS Club" }];
	}

	return [{ title: `Ad (${upperFirst(month)} ${year}) | Philly JS Club` }];
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
				<h1>Philly JS Club</h1>
				<p>
					{upperFirst(month)} {year}
				</p>
			</div>
		</main>
	);
}

function upperFirst(text: string) {
	return text[0].toUpperCase() + text.slice(1);
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
