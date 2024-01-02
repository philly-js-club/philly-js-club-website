import type { MetaFunction } from "@remix-run/react";
import { css } from "styled-system/css";

import { AdLogo } from "~/components/AdLogo";
import { AdText } from "~/components/AdText";
import { constructSiteTitle, upperFirst } from "~/utils/common";
import { getMonthAndYear } from "~/utils/dates";

export const meta: MetaFunction = ({ location }) => {
	const { month, year } = getMonthAndYear(new URLSearchParams(location.search));

	return [{ title: constructSiteTitle(`Ad (${upperFirst(month)} ${year})`) }];
};

export default function Ad() {
	return (
		<main
			className={css({
				base: {
					alignItems: "center",
					background: "foreground",
					color: "background",
					display: "flex",
					flexDirection: "column",
					gap: "[4rem]",
					height: "[100%]",
					justifyContent: "center",
					width: "[100%]",
				},
				small: {
					flexDirection: "row",
					gap: "[2rem]",
					justifyContent: "center",
					padding: "[2rem]",
				},
			})}
		>
			<div
				className={css({
					medium: {
						textAlign: "right",
						width: "[50%]",
					},
				})}
			>
				<AdLogo
					className={css({
						height: {
							base: "[min(50vw, 50vh)]",
							medium: "[40vh]",
							large: "[50vh]",
						},
						width: {
							base: "[min(50vw, 50vh)]",
							medium: "[40vh]",
							large: "[50vh]",
						},
					})}
				/>
			</div>
			<AdText />
		</main>
	);
}
