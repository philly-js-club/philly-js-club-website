import { Arrow } from "~/components/Arrow";
import { region } from "~/config";

interface EventDetailsProps {
	date: Date;
	displayDate: string;
	link: string;
	linkText: string;
	location?: string;
	topics: string[];
	weight?: "light" | "medium";
}

export function EventDetails({
	date,
	displayDate,
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
	let strDate;
	try {
		strDate = formatter.format(date);
	} catch {
		try {
			strDate = date.toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
			});
		} catch (ex) {
			console.log("Date:", date);
			console.log("Error:", ex);
			strDate = displayDate;
		}
	}

	return (
		<article className={`event-details medium event-details-${weight}`}>
			<h3 className="event-details-date">{strDate}</h3>
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
