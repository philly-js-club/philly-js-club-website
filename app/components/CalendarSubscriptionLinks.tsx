import React from "react";

interface CalendarSubscriptionLinksProps {
	webcalUrl: string;
}

export function CalendarSubscriptionLinks({
	webcalUrl,
}: CalendarSubscriptionLinksProps) {
	return (
		<div>
			{[
				{ href: webcalUrl, vendor: "Apple" },
				{
					href: `https://www.google.com/calendar/render?cid=${webcalUrl}`,
					vendor: "Google",
				},
			].map(({ href, vendor }, i, list) => (
				<React.Fragment key={vendor}>
					<a href={href} rel="noreferrer">
						Subscribe with your {vendor} calendar
					</a>
					{i !== list.length - 1 && <span> • </span>}
				</React.Fragment>
			))}
		</div>
	);
}
