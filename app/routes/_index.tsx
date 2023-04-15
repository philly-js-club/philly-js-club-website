import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { EventDetails } from "~/components/EventDetails";
import { PageGrid } from "~/components/PageGrid";

export const loader = async () => {
	return json((await import("../data/events.json")).default[0]);
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
						date={new Date(event.date[0])}
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
