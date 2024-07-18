/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module "ics-service" {
	const createAboutRoute: unknown;
	const createFeedRoute: unknown;
	declare function generateIcs(
		title: string,
		rawEvents: Record<string, unknown>[],
		feedUrl?: string,
	): string;
}
