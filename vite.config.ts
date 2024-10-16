import { vitePlugin as reactRouter } from "@react-router/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		reactRouter({
			ignoredRouteFiles: ["**/.*"],
			prerender: [
				"/",
				"/about",
				"/banner",
				"/code-of-conduct",
				"/events",
				// "/ics-feed",
				"/join-us",
				"/sponsors",
			],
		}),
		tsconfigPaths(),
	],
});
