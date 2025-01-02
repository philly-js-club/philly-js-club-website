import "./root.css";

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { site } from "./config";

const metaTags = [
	{ charSet: "utf-8" },
	{ content: site.baseURL, property: "og:url" },
	{ content: site.baseURL, property: "twitter:url" },
	{ content: `${site.baseURL}/assets/social.png`, property: "og:image" },
	{ content: `${site.baseURL}/assets/social.png`, property: "twitter:image" },
	{ content: site.longTitle, property: "og:title" },
	{ content: site.longTitle, property: "twitter:title" },
	{ content: site.title, name: "title" },
	{ content: "summary", property: "twitter:card" },
	{ content: "website", property: "og:type" },
	{ content: "width=device-width,initial-scale=1", name: "viewport" },
	{ content: site.description, name: "description" },
	{ content: site.description, property: "twitter:description" },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				{metaTags.map((meta) => (
					<meta key={JSON.stringify(meta)} {...meta} />
				))}
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<Meta />
				<Links />
				<link
					href="/feed.atom"
					rel="alternate"
					title={site.title}
					type="application/atom+xml"
				/>
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
