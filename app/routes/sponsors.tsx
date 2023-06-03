import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, type V2_MetaFunction } from "@remix-run/react";

import { Icons } from "~/components/Icons";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

interface LoaderData {
	currentSponsors: Record<
		"description" | "href" | "imageHref" | "name",
		string
	>[];
}

export const loader: LoaderFunction = async () => {
	return await import("../data/sponsors.json");
};

export const meta: V2_MetaFunction = () => {
	return [{ title: constructSiteTitle("Sponsors") }];
};

export default function Sponsors() {
	const sponsors = useLoaderData<LoaderData>();

	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">Thanks, Sponsors!</h2>
					<p className="sponsor-cta body-text">
						Philly JS wouldn't exist without the support of our beloved
						sponsors. Interested in sponsoring us?{" "}
						<a className="underline" href="mailto:phillyjs@joewoods.dev">
							Reach out to Joe!
						</a>
					</p>
					<Icons
						icons={sponsors.currentSponsors}
						imageClassName="sponsor-image"
					/>
				</>
			}
			subtitle
			title="Sponsors"
		/>
	);
}
