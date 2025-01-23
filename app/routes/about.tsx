import { type MetaFunction, useLoaderData } from "react-router";

import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

import team from "../data/team.json";

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("About") }];
};

export function loader() {
	return team;
}

export default function About() {
	const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">Who, Us?</h2>
					<p className="body-text">
						The Philadelphia JavaScript Club, founded in 2022, is a place for
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
						{data.members.map(({ name, role }) => (
							<li key={name}>
								<strong>{name}</strong> - {role}
							</li>
						))}
					</ul>
					<h3 className="large">Organizers Emeritus</h3>
					<ul className="body-text">
						{data.organizersEmeritum.map((name) => (
							<li key={name}>{name}</li>
						))}
					</ul>
					<h3 className="large">Get In Touch</h3>
					<p className="about-page-text">
						You can reach out to{" "}
						<a href="mailto:organizers@phillyjs.com">the Team over email</a>{" "}
						with any questions or comments.
					</p>
					<h3 className="large">The Website</h3>
					<p className="about-page-text">
						Courtesy of Josh using Figma, Remix, and TypeScript.
					</p>
				</>
			}
			subtitle
			title="About"
		/>
	);
}
