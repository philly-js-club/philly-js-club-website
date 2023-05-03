import type { V2_MetaFunction } from "@remix-run/react";

import { PageGrid } from "~/components/PageGrid";
import team from "~/data/team.json";
import { constructSiteTitle } from "~/utils/common";

export const meta: V2_MetaFunction = () => {
	return [{ title: constructSiteTitle("About") }];
};

export default function About() {
	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">Who, Us?</h2>
					<p className="body-text">
						The Philadelphia JavaScript Club, founded in 2022, is a a place for
						developers of all skill and experience levels to connect, show off
						their work, and learn new things.
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
					<p className="body-text">We’re happy for you to join us.</p>
					<h2 className="larger">The Team</h2>
					<ul className="body-text">
						{(team.members as Record<"name" | "role", string>[]).map(
							({ name, role }) => (
								<li key={name}>
									<strong>{name}</strong> - {role}
								</li>
							)
						)}
					</ul>
					<h3 className="large">Organizers Emeritus</h3>
					<ul className="body-text">
						{(team.organizersEmeritum as string[]).map((name) => (
							<li key={name}>{name}</li>
						))}
					</ul>
					<h3 className="large">The Website</h3>
					<p className="about-the-website">
						Courtesy of Josh using Figma, Remix, and TypeScript.
					</p>
				</>
			}
			subtitle
			title="About"
		/>
	);
}
