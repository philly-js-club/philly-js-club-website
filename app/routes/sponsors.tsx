import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, type V2_MetaFunction } from "@remix-run/react";

import { Arrow } from "~/components/Arrow";
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
					<ol className="sponsors">
						{sponsors.currentSponsors.map(
							({ name, description, href, imageHref }) => {
								return (
									<li className="sponsor-list" key={name}>
										<div className="sponsor">
											<img
												alt={`${name} logo`}
												className="sponsor-image"
												src={imageHref}
											/>
											<div className="sponsor-info">
												<a href={href} rel="noreferrer" target="_blank">
													<h3 className="larger">
														{name}{" "}
														<Arrow
															className="arrow-out medium"
															label="External link indication arrow"
															rotate={-45}
														/>
													</h3>
												</a>
												<p className="smaller">{description}</p>
											</div>
										</div>
									</li>
								);
							}
						)}
					</ol>
				</>
			}
			subtitle
			title="Sponsors"
		/>
	);
}
