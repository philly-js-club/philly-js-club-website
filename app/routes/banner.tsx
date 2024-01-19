import type { MetaFunction } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";
import { AdText } from "~/components/AdText";
import { constructSiteTitle, upperFirst } from "~/utils/common";
import { getMonthAndYear } from "~/utils/dates";

export const meta: MetaFunction = ({ location }) => {
	const { month, year } = getMonthAndYear(new URLSearchParams(location.search));

	return [{ title: constructSiteTitle(`Ad (${upperFirst(month)} ${year})`) }];
};

export default function Banner() {
	return (
		<main className="banner-main">
			<div className="banner-img-area">
				<AdLogo className="banner-img" />
			</div>
			<AdText />
		</main>
	);
}
