import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { css } from "styled-system/css";

import { site } from "./config";
import styles from "./index.css";

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
				<link href={styles} rel="stylesheet" />
				<Meta />
				<Links />
			</head>
			<body
				className={css({
					background: "background",
					color: "foreground",
					fontFamily: `["League Spartan", monospace]`,
					fontSmooth: "[smooth]",
					fontSmoothing: "antialiased",
					overflow: "auto",
					textDecoration: "none",

					"& :link, & :visited": {
						textDecoration: "none",
					},

					"& ::selection": {
						background: "foreground",
						color: "background",
					},

					"& *": {
						boxSizing: "border-box",
					},
				})}
			>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
