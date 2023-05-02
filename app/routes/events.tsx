import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { EventDetails } from "~/components/EventDetails";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle, groupBy } from "~/utils/common";

export const loader = async () => {
	return json(
		groupBy(await import("../data/events.json"), (event) =>
			new Date(event.date).getFullYear()
		)
	);
};

export const meta: V2_MetaFunction = () => {
	return [{ title: constructSiteTitle("Events") }];
};

export default function Events() {
	const data = useLoaderData<typeof loader>();

	return (
		<PageGrid
			left={
				<ol className="events-year">
					{Object.entries(data)
						.sort(([a], [b]) => +b - +a)
						.map(([year, events]) => (
							<li className="events-year-list" key={year}>
								<h2 className="events-year-heading">{year}</h2>
								<ol className="events-year-events-list">
									{events.map((event) => (
										<EventDetails
											date={new Date(event.date)}
											key={event.date}
											link={event.link}
											linkText="Details"
											location={event.location}
											topics={event.topics}
										/>
									))}
								</ol>
							</li>
						))}
				</ol>
			}
			subtitle
			title="Events"
		/>
	);
}
