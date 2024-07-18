import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const uri of ["/", "about", "events", "code-of-conduct"]) {
	test(uri, async ({ page }) => {
		await page.goto("/");

		const results = await new AxeBuilder({ page }).analyze();

		expect(
			results.violations.length,
			[
				"Accessibility violations found. Run aXe to view more details:",
				...results.violations.map(
					(violation) => `- [${violation.id}] ${violation.help}`,
				),
			].join("\n"),
		).toBe(0);
	});
}
