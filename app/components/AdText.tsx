// We deploy to static pages, so this must be a client-only component.
// https://github.com/philly-js-club/philly-js-club-website/issues/61
"use client";

import { css } from "styled-system/css";

import { site } from "~/config";
import { upperFirst } from "~/utils/common";
import { useMonthAndYear } from "~/utils/dates";

export function AdText() {
	const { month, year } = useMonthAndYear();

	return (
		<div
			className={css({
				display: "flex",
				flexDirection: "column",
				gap: "[2rem]",
				textAlign: "center",
				small: {
					textAlign: "left",
					width: "[50%]",
				},
				medium: {
					alignContent: "flex-start",
				},
			})}
		>
			<h1
				className={css({
					fontSize: "[5rem]",
					fontWeight: "title",
					lineHeight: "[0.85]",
					margin: "[0 15vw]",
					textTransform: "uppercase",
					small: {
						margin: "[0]",
					},
					medium: {
						fontSize: "[7rem]",
					},
					large: {
						fontSize: "[10rem]",
					},
				})}
			>
				{site.title}
			</h1>
			<p
				className={css({
					fontSize: "larger",
					fontWeight: "[700]",
				})}
			>
				{upperFirst(month)} {year}
			</p>
		</div>
	);
}
