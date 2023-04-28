import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

export default {
	testDir: "./tests",
	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},
	forbidOnly: !!process.env.CI,
	fullyParallel: false,
	reporter: process.env.CI ? "github" : "html",
	use: {
		baseURL: "http://localhost:3000",
		trace: "on",
	},
	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
				channel: "chrome",
			},
		},
	],
	outputDir: "test-results/",
	webServer: {
		command: "pnpm dev",
		reuseExistingServer: true,
		port: 3000,
	},
} satisfies PlaywrightTestConfig;
