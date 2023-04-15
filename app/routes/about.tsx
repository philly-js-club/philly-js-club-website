import type { V2_MetaFunction } from "@remix-run/react";

import { PageGrid } from "~/components/PageGrid";

export const meta: V2_MetaFunction = () => {
	return [{ title: "About | Philly JS Club" }];
};

export default function About() {
	return (
		<PageGrid
			left={
				<>
					<p className="body-text">
						The Philadelphia JavaScript Club, founded in 2022, is a a place for
						developers of all skill and experience levels to connect, show off
						their work, and learn new things.{" "}
					</p>
					<p className="body-text">
						We are devoted to being good citizens: we're here to help support
						individual and organizational development, to connect developers
						with the events going on in Philadelphia, and to provide a safe
						space for people to try new things. We want to empower everyone who
						joins us to build the best things they can build; we want to help
						make instant friends amongst the developers who call Philadelphia
						home.
					</p>
					<p className="body-text">We’re happy you could join us!</p>
				</>
			}
			subtitle
			title="About"
		/>
	);
}
