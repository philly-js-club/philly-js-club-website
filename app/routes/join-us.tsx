import { type MetaFunction, useLoaderData } from "react-router";

import { Icons } from "~/components/Icons";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

import platforms from "../data/platforms.json";

export function loader() {
	return platforms;
}

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Join Us") }];
};

export default function Socials() {
	const platforms = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	return (
		<PageGrid
			left={
				<>
					<p className="body-text">Here's where you can find us:</p>
					<Icons
						icons={platforms.currentPlatforms}
						imageClassName="platform-image"
					/>
				</>
			}
			subtitle
			title="Join Us"
		/>
	);
}
