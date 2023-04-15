import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import styles from "./root.css";

const description =
	"A local community for talking about the things that excite us about Javascript development and the web.";

const metaTags = [
	{ charSet: "utf-8" },
	{ content: "https://phillyjs.com", property: "og:url" },
	{ content: "https://phillyjs.com", property: "twitter:url" },
	{ content: "https://phillyjs.com/logo.png", property: "og:image" },
	{ content: "https://phillyjs.com/logo.png", property: "twitter:image" },
	{ content: "Philadelphia JavaScript Club", property: "og:title" },
	{ content: "Philadelphia JavaScript Club", property: "twitter:title" },
	{ content: "Philly JS Club", name: "title" },
	{ content: "summary_large_image", property: "twitter:card" },
	{ content: "website", property: "og:type" },
	{ content: "width=device-width,initial-scale=1", name: "viewport" },
	{ content: description, name: "description" },
	{ content: description, property: "twitter:description" },
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
