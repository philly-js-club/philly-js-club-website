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

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content={description} name="description" />
				<meta content="Philly JS Club" name="title" />
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				<meta content="Philadelphia JavaScript Club" property="og:title" />
				<meta content="website" property="og:type" />
				<meta content="https://phillyjs.com" property="og:url" />
				<meta content="summary_large_image" property="twitter:card" />
				<meta content={description} property="twitter:description" />
				<meta content="Philadelphia JavaScript Club" property="twitter:title" />
				<meta content="https://phillyjs.com" property="twitter:url" />
				<meta
					content="https://phillyjs.com/logo.svg"
					property="twitter:image"
				/>
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
