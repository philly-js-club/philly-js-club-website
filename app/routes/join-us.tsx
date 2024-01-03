import type { LoaderFunction } from "@remix-run/node";
import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";

import { Icons } from "~/components/Icons";
import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

interface LoaderData {
	currentPlatforms: Record<"href" | "imageHref" | "name", string>[];
}

export const loader: LoaderFunction = async () => {
	return await import("../data/platforms.json");
};

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Join Us") }];
};

export default function Socials() {
	const platforms = useLoaderData<LoaderData>();

	return (
		<PageGrid
			left={
				<>
					<p className={css({ textStyle: "body" })}>
						Here's where you can find us:
					</p>
					<Icons
						icons={platforms.currentPlatforms}
						imageClassName={css({ width: "[5rem]" })}
					/>
				</>
			}
			subtitle
			title="Join Us"
		/>
	);
}
