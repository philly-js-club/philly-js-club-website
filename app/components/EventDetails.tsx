import { Arrow } from "~/components/Arrow";

interface EventDetailsProps {
	date: Date;
	link: string;
	linkText: string;
	location: string;
	topics: string[];
}

export function EventDetails({
	date,
	link,
	location,
	linkText,
	topics,
}: EventDetailsProps) {
	const formatter = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
	});

	return (
		<article className="event-details medium">
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
}
