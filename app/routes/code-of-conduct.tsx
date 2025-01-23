import type { MetaFunction } from "react-router";

import { PageGrid } from "~/components/PageGrid";
import { constructSiteTitle } from "~/utils/common";

export const meta: MetaFunction = () => {
	return [{ title: constructSiteTitle("Code of Conduct") }];
};

export default function About() {
	return (
		<PageGrid
			left={
				<>
					<h2 className="larger">
						Anti-Harassment and Anti-Bullying Code of Conduct
					</h2>
					<p className="body-text">
						The Philadelphia JavaScript Club is dedicated to providing a
						respectful, harassment-free community for everyone. We do not
						tolerate harassment or bullying of any community member in any form.
						This does not only extend to members of the Philadelphia JavaScript
						Club, but to anyone who chooses to become involved in the larger
						Philadelphia JavaScript Club community of users, developers and
						integrators through events or interactions.
					</p>
					<p className="body-text">
						Harassment includes offensive verbal/electronic comments related to
						personal characteristics or choices, sexual images or comments in
						public or online spaces, deliberate intimidation, bullying,
						stalking, following, harassing photography or recording, sustained
						disruption of talks, Slack messages, electronic meetings, physical
						meetings or other events, inappropriate physical contact, or
						unwelcome sexual attention. Participants asked to stop any harassing
						or bullying behavior are expected to comply immediately.
					</p>
					<p className="body-text">
						If a participant engages in harassing behavior, representatives of
						the community may take reasonable action they deem appropriate,
						including warning the offender, expulsion from any Philadelphia
						JavaScript Club event, or expulsion from mailing lists, Slack
						groups, discussion boards, and other electronic communications
						channels to resolve the issue. This may include expulsion from
						Philadelphia JavaScript Club membership.
					</p>
					<p className="body-text">
						If you are being harassed, notice that someone else is being
						harassed, or have any other concerns, please act to intercede or ask
						for help from any member of the Philadelphia JavaScript Club, Slack
						group admins, website admins, or organizers/representatives of any
						physical events put on under the auspices of the Philadelphia
						JavaScript Club.
					</p>
					<p className="body-text">—</p>
					<p className="body-text">
						This Code of Conduct adapted from{" "}
						<a
							className="page-grid-footer-link"
							href="https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct"
							rel="noreferrer"
							target="_blank"
						>
							https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct
						</a>
					</p>
					<p className="body-text">
						The content of this Code of Conduct is licensed under a Creative
						Commons Attribution-ShareAlike 4.0 International license.
					</p>
				</>
			}
			subtitle
			title="CoC"
		/>
	);
}
