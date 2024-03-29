interface AdLogoProps {
	className?: string;
}

export function AdLogo({ className }: AdLogoProps) {
	return (
		<svg
			aria-label="PhillyJS Logo"
			className={className}
			fill="none"
			height="1000"
			viewBox="0 0 1000 1000"
			width="1000"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g>
				<path d="M1000 0H0V1000H1000V0Z" fill="var(--color-background)" />
				<path
					d="M822 868H902.4V434.8H822V868Z"
					fill="var(--color-foreground)"
				/>
				<path
					d="M546.22 869H627.22V732.2C627.22 699.8 646.42 681.8 678.82 681.8C707.62 681.8 721.42 698 721.42 726.8V869H802.42V721.4C802.42 648.8 762.22 608 706.42 608C671.02 608 642.82 624.2 627.22 653.6V435.8H546.22V869Z"
					fill="var(--color-foreground)"
				/>
				<path
					d="M234.85 868H318.85V775H347.65C461.05 775 530.05 716.2 530.05 617.8C530.05 519.4 461.65 460 347.65 460H234.85V868ZM318.85 701.2V533.8H345.25C412.45 533.8 443.65 561.4 443.65 617.8C443.65 673.6 413.65 701.2 345.25 701.2H318.85Z"
					fill="var(--color-foreground)"
				/>
			</g>
		</svg>
	);
}
