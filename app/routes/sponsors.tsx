import { type MetaFunction, useLoaderData } from "react-router";

import { Icons } from "~/components/Icons";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

import sponsors from "../data/sponsors.json";

export function loader() {
	return sponsors;
}

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Sponsors") }];
};

export default function Sponsors() {
	const sponsors = useLoaderData() as Awaited<ReturnType<typeof loader>>;

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
