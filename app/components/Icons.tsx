import { css } from "styled-system/css";

import { Arrow } from "~/components/Arrow";

interface IconProp {
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
		<ol
			className={css({
				listStyleType: "none",
				marginTop: "[3rem]",
				padding: "[0]",
			})}
		>
			{icons.map(({ description, href, imageHref, name }) => (
				<li
					className={css({
						"& + &": {
							marginTop: "[3rem]",
						},
					})}
					key={name}
				>
					<div
						className={css({
							alignItems: "center",
							display: "flex",
							flexFlow: "[row wrap]",
							gap: "[2rem]",
						})}
					>
						<img
							alt={`${name} logo`}
							className={imageClassName}
							src={imageHref}
						/>
						<div
							className={css({
								flex: "[1 0 50%]",
								"& > * + *": { marginTop: "[0.5rem]" },
							})}
						>
							<a href={href} rel="noreferrer" target="_blank">
								<h3 className={css({ textStyle: "larger" })}>
									{name}{" "}
									<Arrow
										className={css({ textStyle: "medium" })}
										direction="out"
										label="External link indication arrow"
									/>
								</h3>
							</a>
							{description && (
								<p className={css({ textStyle: "smaller" })}>{description}</p>
							)}
						</div>
					</div>
				</li>
			))}
		</ol>
	);
}
