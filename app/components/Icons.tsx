import { Arrow } from "~/components/Arrow";

interface IconProp {
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
			{icons.map(({ href, imageHref, name }) => (
				<li className="icon-list" key={name}>
					<div className="icon">
						<img
							alt={`${name} logo`}
							className={imageClassName}
							src={imageHref}
						/>
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
						</div>
					</div>
				</li>
			))}
		</ol>
	);
}
