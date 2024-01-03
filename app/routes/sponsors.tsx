import type { LoaderFunction } from "@remix-run/node";
import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";

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

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Sponsors") }];
};

export default function Sponsors() {
	const sponsors = useLoaderData<LoaderData>();

	return (
		<PageGrid
			left={
				<>
					<h2 className={css({ textStyle: "larger" })}>Thanks, Sponsors!</h2>
					<p className={css({ textStyle: "body" })}>
						Philly JS wouldn't exist without the support of our beloved
						sponsors. Interested in sponsoring us?{" "}
						<a
							className={css({ textStyle: "underline" })}
							href="mailto:phillyjs@joewoods.dev"
						>
							Reach out to Joe!
						</a>
					</p>
					<Icons
						icons={sponsors.currentSponsors}
						imageClassName={css({ height: "[10rem]", width: "[10rem]" })}
					/>
				</>
			}
			subtitle
			title="Sponsors"
		/>
	);
}
