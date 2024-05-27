import type { LoaderFunction } from "@remix-run/node";
import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";

import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("About") }];
};

interface LoaderData {
	members: Record<"name" | "role", string>[];
	organizersEmeritum: string[];
}

export const loader: LoaderFunction = async () => {
	return await import("../data/team.json");
};

const aboutPageText = css({
	fontSize: "small",
	margin: "[1rem 0 2rem]",
});

export default function About() {
	const data = useLoaderData<LoaderData>();

	return (
		<PageGrid
			left={
				<>
					<h2 className={css({ textStyle: "larger" })}>Who, Us?</h2>
					<p className={css({ textStyle: "body" })}>
						The Philadelphia JavaScript Club, founded in 2022, is a a place for
						developers of all skill and experience levels to connect, show off
						their work, and learn new things.
					</p>
					<p className={css({ textStyle: "body" })}>
						We are devoted to being good citizens: we're here to help support
						individual and organizational development, to connect developers
						with the events going on in Philadelphia, and to provide a safe
						space for people to try new things. We want to empower everyone who
						joins us to build the best things they can build; we want to help
						make instant friends amongst the developers who call Philadelphia
						home.
					</p>
					<p className={css({ textStyle: "body" })}>
						We’re happy for you to join us.
					</p>
					<h2 className={css({ textStyle: "larger" })}>The Team</h2>
					<ul className={css({ textStyle: "body" })}>
						{data.members.map(({ name, role }) => (
							<li key={name}>
								<strong>{name}</strong> - {role}
							</li>
						))}
					</ul>
					<h3 className={css({ textStyle: "large" })}>Organizers Emeritus</h3>
					<ul className={css({ textStyle: "body" })}>
						{(data.organizersEmeritum as string[]).map((name) => (
							<li key={name}>{name}</li>
						))}
					</ul>
					<h3 className={css({ textStyle: "large" })}>Get In Touch</h3>
					<p className={aboutPageText}>
						You can reach out to{" "}
						<a
							className={css({ textStyle: "underline" })}
							href="mailto:phillyjs@joewoods.dev"
						>
							Joe over email
						</a>{" "}
						with any questions or comments.
					</p>
					<h3 className={css({ textStyle: "large" })}>The Website</h3>
					<p className={aboutPageText}>
						Courtesy of Josh using Figma, Remix, and TypeScript.
					</p>
				</>
			}
			subtitle
			title="About"
		/>
	);
}
