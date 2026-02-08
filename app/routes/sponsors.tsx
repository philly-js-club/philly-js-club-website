import { type MetaFunction, useLoaderData } from "@remix-run/react";

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
	const sponsors = useLoaderData<typeof loader>();

	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">Thanks, Sponsors!</h2>
					<p className="sponsor-cta body-text">
						Philly JS wouldn&apos;t exist without the support of our beloved
						sponsors. Interested in sponsoring us?{" "}
						<a className="underline" href="mailto:organizers@phillyjs.com">
							Reach out to the Team!
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
