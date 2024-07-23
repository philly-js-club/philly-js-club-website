interface CalendarSubscriptionLinksProps {
	webcalUrl: string;
}

export function CalendarSubscriptionLinks({
	webcalUrl,
}: CalendarSubscriptionLinksProps) {
	return (
		<details className="calendar-subscription">
			<summary>📆 Subscribe with your favorite calendar client</summary>
			<p>
				<a href={`https://www.google.com/calendar/render?cid=${webcalUrl}`}>
					Subscribe with Google Calendar
				</a>
			</p>
			<p>To subscribe, point your calendar client to the following URL:</p>
			<p>{webcalUrl}</p>
			<p>
				⚠️ Be sure to not download and import that file! You'll need to
				subscribe to the calendar updates in order for your calendar client to
				continue to fetch new events.
			</p>
		</details>
	);
}
