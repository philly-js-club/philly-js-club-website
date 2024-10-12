import { Arrow } from "~/components/Arrow";
import { region } from "~/config";

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
	try {
		return (
			<article className={`event-details medium event-details-${weight}`}>
				<h3 className="event-details-date">{formatter.format(date)}</h3>
				<p>{location}</p>
				<ul className="event-details-topics">
					{topics.map((topic) => (
						<li className="event-details-topic" key={topic}>
							{topic}
						</li>
					))}
				</ul>
				<a href={link} rel="noreferrer" target="_blank">
					{linkText}
					<Arrow
						className="arrow-out"
						label="External link indication arrow"
						rotate={-45}
					/>
				</a>
			</article>
		);
	} catch (ex) {
		// Hacky fix to get website back up for some reason
		// does not like the date string: 2024-11-14T18:00:00.000-05:00
		// I originally thought it might be the time zone -04 but that
		// was not the case.
		// after passed to new Date(string) in the
		// home page even though this also happens on the
		// events page and that is working fine.
		// So hard coding for the moment until we
		// can locate the reason the _index.tsx page
		// is wonky...
		return (
			<article className={`event-details medium event-details-${weight}`}>
				<h3 className="event-details-date">November 14</h3>
				<p>{location}</p>
				<ul className="event-details-topics">
					{topics.map((topic) => (
						<li className="event-details-topic" key={topic}>
							{topic}
						</li>
					))}
				</ul>
				<a href={link} rel="noreferrer" target="_blank">
					{linkText}
					<Arrow
						className="arrow-out"
						label="External link indication arrow"
						rotate={-45}
					/>
				</a>
			</article>
		);
	}
}
