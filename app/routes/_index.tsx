import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { EventDetails } from "~/components/EventDetails";
import { PageGrid } from "~/components/PageGrid";

export const loader = async () => {
	const events = (await import("../data/events.json")).map((event) => ({
		...event,
		date: new Date(event.date),
	}));
	events.sort((a, b) => +b.date - +a.date);

	// This assumes we'll always have a rebuild of the site after an event finishes.
	// Surely this assumption tied to datetime logic will never come back to haunt us.
	const now = new Date();

	return json(events[events.findIndex((event) => now > event.date) - 1]);
};

export const meta: V2_MetaFunction = () => {
	return [{ title: "Philly JS Club" }];
};

export default function Index() {
	const event = useLoaderData<typeof loader>();

	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">Next Jawn</h2>
					<EventDetails
						date={new Date(event.date)}
						link={event.link}
						linkText="Register Now"
						location={event.location}
						topics={event.topics}
						weight="medium"
					/>
				</>
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
