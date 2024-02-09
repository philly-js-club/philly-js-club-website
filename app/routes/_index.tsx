import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { EventDetails } from "~/components/EventDetails";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

export const loader = async () => {
	// This assumes the events are always in sorted order, newest first.
	// Surely this assumption on undocumented data behavior will never come back to haunt us.
	const events = (await import("../data/events.json")).map((event) => ({
		...event,
		date: new Date(event.date),
	}));

	// This assumes we'll always have a rebuild of the site after an event finishes.
	// Surely this assumption tied to datetime logic will never come back to haunt us.
	const now = new Date();
	const sixWeeksInTheFuture = new Date(
		now.getTime() + 6 * 7 * 24 * 60 * 60 * 1000
	);

	return json(
		// Filter and sort event date in ascending order.
		events
			.filter(({ date }) => date > now && date < sixWeeksInTheFuture)
			.sort((a, b) => a.date.getTime() - b.date.getTime())
	);
};

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle() }];
};

export default function Index() {
	const events = useLoaderData<typeof loader>();

	return (
		<PageGrid
			left={
				events.length ? (
					<>
						<h2 className="larger">
							Next Jawn{events.length === 1 ? "" : "s"}
						</h2>
						{events.map((event, index) => (
							<EventDetails
								date={new Date(event.date)}
								key={index}
								link={event.link}
								linkText="Register Now"
								location={event.location}
								topics={event.topics}
								weight="medium"
							/>
						))}
					</>
				) : (
					<></>
				)
			}
			title={
				<>
					PHILLY
					<br />
					JS CLUB
				</>
			}
		/>
	);
}
