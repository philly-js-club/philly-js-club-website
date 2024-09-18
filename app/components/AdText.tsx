import { site } from "~/config";
import { upperFirst } from "~/utils/common";
import { useMonthAndYear } from "~/utils/dates";

export function AdText() {
	const { month, year } = useMonthAndYear();

	return (
		<div className="banner-text">
			<h1>{site.title}</h1>
			<p>
				{upperFirst(month)} {year}
			</p>
		</div>
	);
}
