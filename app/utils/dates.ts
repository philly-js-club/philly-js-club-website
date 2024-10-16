import { useSearchParams } from "react-router";

export function getMonthAndYear(params: URLSearchParams) {
	const month = params.get("month")?.toLowerCase();
	const year = params.get("year")?.toLowerCase();

	return {
		month: isValidMonth(month) ? month : "(invalid month)",
		year: isValidYear(year) ? year : "(invalid year)",
	};
}

export function useMonthAndYear() {
	const [params] = useSearchParams();

	return getMonthAndYear(params);
}

const monthNames = new Set<string | undefined>([
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

function isValidMonth(month: string | undefined): month is string {
	return monthNames.has(month);
}

function isValidYear(year: string | undefined): year is string {
	return !!(year && /\d{4}/.test(year));
}
