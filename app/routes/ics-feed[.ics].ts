import type { LoaderFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";
import type { DurationObject, EventAttributes } from "ics";
import { generateIcs } from "ics-service";

import { site } from "~/config";

export const loader: LoaderFunction = async () => {
	const events: EventAttributes[] = (await import("../data/events.json")).map(
		(event) => {
			const date = new Date(event.date);
			return {
				title: event.topics.join(", "),
				location: event.location,
				url: event.link,
				start: [
					date.getUTCFullYear(),
					date.getUTCMonth() + 1,
					date.getUTCDate(),
					date.getUTCHours(),
					date.getUTCMinutes(),
				],
				startInputType: "utc",
				endInputType: "utc",
				duration: event.duration as DurationObject,
			};
		}
	);
	let ics = "";
	try {
		ics = generateIcs(site.title, events, site.baseURL);
	} catch (err) {
		return new Response("Invalid ICS File", { status: 500 });
	}

	return new Response(ics, {
		headers: {
			"Content-Type": "text/calendar",
			"Content-Disposition": `attachment; filename="phillyjs.ics"`,
		},
	});
};
