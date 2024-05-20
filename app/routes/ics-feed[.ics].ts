import { unstable_defineLoader } from "@remix-run/node";
import type { DurationObject, EventAttributes } from "ics";
import icsService from "ics-service";

import { site } from "~/config";

import eventJson from "../data/events.json";

export const loader = unstable_defineLoader(() => {
	const eventData = [...eventJson].reverse();
	const events: EventAttributes[] = eventData.map((event, index) => {
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
			// HACK: this relies on position in the array not changing… but
			//       honestly, it's not a big deal if it does.
			uid: String(index),
		};
	});
	let ics = "";
	try {
		ics = icsService.generateIcs(site.title, events, site.baseURL);
	} catch (err) {
		return new Response("Invalid ICS File", { status: 500 });
	}

	return new Response(ics, {
		headers: {
			"Content-Type": "text/calendar",
			"Content-Disposition": `attachment; filename="phillyjs.ics"`,
		},
	});
});
