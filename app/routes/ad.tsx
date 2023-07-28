import type { V2_MetaFunction } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";
import { AdText } from "~/components/AdText";
import { constructSiteTitle, upperFirst } from "~/utils/common";
import { getMonthAndYear } from "~/utils/dates";

export const meta: V2_MetaFunction = ({ location }) => {
	const { month, year } = getMonthAndYear(new URLSearchParams(location.search));

	return [{ title: constructSiteTitle(`Ad (${upperFirst(month)} ${year})`) }];
};

export default function Ad() {
	return (
		<main className="ad-main">
			<div className="ad-img-area">
				<AdLogo className="ad-img" />
			</div>
			<AdText />
		</main>
	);
}
