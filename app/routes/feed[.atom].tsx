import { Feed } from "feed";

import { site } from "~/config";

import eventJson from "../data/events.json";

export function loader() {
	const feed = new Feed({
		title: site.title,
		description: site.description,
		id: `${site.baseURL}/`,
		link: site.baseURL,
		language: "en",
		copyright: `All rights reserved ${new Date().getFullYear().toString()}, Philly JS Club`,
		updated: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
		feedLinks: {
			atom: `${site.baseURL}/feed.atom`,
		},
	});

	eventJson.forEach((event) => {
		feed.addItem({
			title: event.topics.join(" "),
			id: event.link,
			link: event.link,
			author: [{ name: "PhillyJS Club" }],
			date: new Date(
				new Date(event.date).getFullYear(),
				new Date(event.date).getMonth(),
				1,
			),
			content: `Date: ${new Date(event.date).toDateString()}, Location: ${event.location ?? "Not available"}, Details: ${event.link}`,
		});
	});

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml",
			"Cache-Control": "max-age=3600",
			"Access-Control-Allow-Origin": "*",
		},
	});
}
