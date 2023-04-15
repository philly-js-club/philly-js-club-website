import type { V2_MetaFunction } from "@remix-run/react";

import { PageGrid } from "~/components/PageGrid";

export const meta: V2_MetaFunction = () => {
	return [{ title: "About | Philly JS Club" }];
};

export default function About() {
	return (
		<PageGrid
			left={
				<p className="body-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. ... It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000 years old.
				</p>
			}
			subtitle
			title="About"
		/>
	);
}
