import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { site } from "./config";
import styles from "./root.css";

const metaTags = [
	{ charSet: "utf-8" },
	{ content: site.baseURL, property: "og:url" },
	{ content: site.baseURL, property: "twitter:url" },
	{ content: `${site.baseURL}/logo.png`, property: "og:image" },
	{ content: `${site.baseURL}/logo.png`, property: "twitter:image" },
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
				<link href={styles} rel="stylesheet" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
