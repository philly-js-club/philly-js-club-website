import type { MetaFunction } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";
import { AdText } from "~/components/AdText";
import { constructSiteTitle, upperFirst } from "~/utils/common";
import { getMonthAndYear } from "~/utils/dates";

import * as styles from "./ad.css";

export const meta: MetaFunction = ({ location }) => {
	const { month, year } = getMonthAndYear(new URLSearchParams(location.search));

	return [{ title: constructSiteTitle(`Ad (${upperFirst(month)} ${year})`) }];
};

export default function Ad() {
	return (
		<main className={styles.ad}>
			<div className={styles.imgArea}>
				<AdLogo className={styles.img} />
			</div>
			<AdText />
		</main>
	);
}
