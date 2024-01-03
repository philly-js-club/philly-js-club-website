import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
	body: {
		value: {
			fontSize: "{fontSizes.medium}",
			fontWeight: "{fontSizes.light}",
			lineHeight: "{fontSizes.medium}",
		},
	},
	large: {
		value: {
			fontSize: "{fontSizes.large}",
			fontWeight: "{fontWeights.large}",
		},
	},
	larger: {
		value: {
			fontSize: "{fontSizes.larger}",
			fontWeight: "{fontWeights.larger}",

			// Temporary, for testing textStyles...
			textDecoration: "underline",
		},
	},
	medium: {
		value: {
			fontSize: "{fontSizes.medium}",
			fontWeight: "{fontWeights.medium}",
		},
	},
	smaller: {
		value: {
			fontSize: "{fontSizes.smaller}",
			fontWeight: "{fontWeights.smaller}",
		},
	},
	underline: {
		value: {
			textDecoration: "underline",
		},
	},
});
