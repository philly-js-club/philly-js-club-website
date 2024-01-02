import type { RecipeVariantProps } from "styled-system/css";
import { css, cva } from "styled-system/css";

import { Arrow } from "~/components/Arrow";
import { region } from "~/config";

export interface EventDetailsProps
	extends NonNullable<RecipeVariantProps<typeof eventDetails>> {
	date: Date;
	link: string;
	linkText: string;
	location: string;
	topics: string[];
}

const eventDetails = cva({
	base: {
		fontSize: "medium",
		fontWeight: "medium",
		margin: "[1.5rem 0]",
		// Todo: find a different way...
		"& + &": {
			marginTop: "[3rem]",
		},
	},
	variants: {
		weight: {
			light: {
				fontWeight: "light",
			},
			medium: {},
		},
	},
});

export function EventDetails({
	date,
	link,
	location,
	linkText,
	topics,
	weight = "light",
}: EventDetailsProps) {
	const formatter = new Intl.DateTimeFormat(region.locale, {
		timeZone: region.timeZone,
		day: "numeric",
		month: "long",
	});

	return (
		<article className={eventDetails({ weight })}>
			<h3
				className={css({
					fontSize: "medium",
					marginBlock: "[1rem]",
				})}
			>
				{formatter.format(date)}
			</h3>
			<p>{location}</p>
			<ul className={css({ margin: "[2rem 0 1rem]" })}>
				{topics.map((topic) => (
					<li className={css({ margin: "[0.25em 0]" })} key={topic}>
						{topic}
					</li>
				))}
			</ul>
			<a href={link} rel="noreferrer" target="_blank">
				{linkText}
				<Arrow direction="out" label="External link indication arrow" />
			</a>
		</article>
	);
}
