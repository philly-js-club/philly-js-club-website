import { useState } from "react";
import { css } from "styled-system/css";

interface CalendarSubscriptionLinksProps {
	webcalUrl: string;
}

export function CalendarSubscriptionLinks({
	webcalUrl,
}: CalendarSubscriptionLinksProps) {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className={css({ fontSize: "small" })}>
			<button
				className={css({
					base: {
						background: "background",
						border: "[2px solid {colors.foreground}]",
						borderRadius: "[1em]",
						color: "foreground",
						cursor: "pointer",
						fontSize: "smaller",
						margin: "[1em 0]",
						padding: "[0.5em]",
						textAlign: "left",
						width: "auto",
					},
					medium: {
						marginTop: "[0]",
					},
					"& p": {
						marginTop: "[0.5rem]",
					},
				})}
				onClick={() => setShowMore((s) => !s)}
			>
				📆 Subscribe with your favorite calendar client
			</button>
			{showMore && (
				<>
					<p>
						<a
							className={css({ textStyle: "underline" })}
							href={`https://www.google.com/calendar/render?cid=${webcalUrl}`}
						>
							Subscribe with Google Calendar
						</a>
					</p>
					<p>To subscribe, point your calendar client to the following URL:</p>
					<p>{webcalUrl}</p>
					<p>
						⚠️ Be sure to not download and import that file! You'll need to
						subscribe to the calendar updates in order for your calendar client
						to continue to fetch new events.
					</p>
				</>
			)}
		</div>
	);
}
