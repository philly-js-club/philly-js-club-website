import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";

import { CalendarSubscriptionLinks } from "~/components/CalendarSubscriptionLinks";
import { EventDetails } from "~/components/EventDetails";
import { PageGrid } from "~/components/PageGrid";
import { site } from "~/config";
import { constructSiteTitle, groupBy } from "~/utils/common";

import events from "../data/events.json";

export function loader() {
	return groupBy(events, (event) => new Date(event.date).getFullYear());
}

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Events") }];
};

export default function Events() {
	const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	return (
		<PageGrid
			left={
				<>
					<CalendarSubscriptionLinks
						webcalUrl={`webcal://${site.domain}/ics-feed.ics`}
					/>
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
												displayDate={
													event.displayDate ?? "Missing Display Date"
												}
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
				</>
			}
			subtitle
			title="Events"
		/>
	);
}
