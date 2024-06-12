import { Arrow } from "~/components/Arrow";

interface IconProp {
	darkModeImageHref?: string;
	description?: string;
	href: string;
	imageHref: string;
	name: string;
}

interface IconsProps {
	icons: IconProp[];
	imageClassName?: string;
}

export function Icons({ icons, imageClassName }: IconsProps) {
	return (
		<ol className="icons">
			{icons.map(
				({ darkModeImageHref, description, href, imageHref, name }) => (
					<li className="icon-list" key={name}>
						<div className="icon">
							<img
								alt={`${name} logo`}
								className={
									(imageClassName ?? "") +
									(darkModeImageHref ? " only-light" : "")
								}
								src={imageHref}
							/>
							{darkModeImageHref && (
								<img
									alt={`${name} logo`}
									className={(imageClassName ?? "") + " only-dark"}
									src={darkModeImageHref}
								/>
							)}
							<div className="icon-info">
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
								{description && <p className="smaller">{description}</p>}
							</div>
						</div>
					</li>
				)
			)}
		</ol>
	);
}
