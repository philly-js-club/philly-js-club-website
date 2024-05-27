import clsx from "clsx";

import { Arrow } from "~/components/Arrow";
import { region } from "~/config";
import { fonts } from "~/theme.css";

import * as styles from "./EventDetails.css";

interface EventDetailsProps {
	date: Date;
	link: string;
	linkText: string;
	location: string;
	topics: string[];
	weight?: "light" | "medium";
}

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
		<article className={clsx(styles.eventDetails[weight], fonts.medium)}>
			<h3 className={styles.date}>{formatter.format(date)}</h3>
			<p>{location}</p>
			<ul className={styles.topics}>
				{topics.map((topic) => (
					<li className={styles.topic} key={topic}>
						{topic}
					</li>
				))}
			</ul>
			<a href={link} rel="noreferrer" target="_blank">
				{linkText}
				<Arrow label="External link indication arrow" variant="out" />
			</a>
		</article>
	);
}
