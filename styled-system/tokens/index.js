const tokens = {
	"fontSizes.smallerJosh": {
		value: "clamp(1.5rem, 2vw, 2rem)",
		variable: "var(--font-sizes-smaller-josh)",
	},
	"fontSizes.smallJosh": {
		value: "clamp(1.5rem, 4vw, 2rem)",
		variable: "var(--font-sizes-small-josh)",
	},
	"fontSizes.mediumJosh": {
		value: "clamp(1.5rem, 4vw, var(--font-sizes-large)",
		variable: "var(--font-sizes-medium-josh)",
	},
	"fontSizes.largeJosh": {
		value: "clamp(2rem, 4vw, 3rem)",
		variable: "var(--font-sizes-large-josh)",
	},
	"fontSizes.largerJosh": {
		value: "clamp(2.5rem, 5vw, 5rem)",
		variable: "var(--font-sizes-larger-josh)",
	},
	"fontSizes.titleJosh": {
		value: "clamp(7rem, 13vw, 15rem)",
		variable: "var(--font-sizes-title-josh)",
	},
	"fontSizes.wat": {
		value: "123px",
		variable: "var(--font-sizes-wat)",
	},
	"breakpoints.sm": {
		value: "640px",
		variable: "var(--breakpoints-sm)",
	},
	"breakpoints.md": {
		value: "768px",
		variable: "var(--breakpoints-md)",
	},
	"breakpoints.lg": {
		value: "1024px",
		variable: "var(--breakpoints-lg)",
	},
	"breakpoints.xl": {
		value: "1280px",
		variable: "var(--breakpoints-xl)",
	},
	"breakpoints.2xl": {
		value: "1536px",
		variable: "var(--breakpoints-2xl)",
	},
	"sizes.breakpoint-sm": {
		value: "640px",
		variable: "var(--sizes-breakpoint-sm)",
	},
	"sizes.breakpoint-md": {
		value: "768px",
		variable: "var(--sizes-breakpoint-md)",
	},
	"sizes.breakpoint-lg": {
		value: "1024px",
		variable: "var(--sizes-breakpoint-lg)",
	},
	"sizes.breakpoint-xl": {
		value: "1280px",
		variable: "var(--sizes-breakpoint-xl)",
	},
	"sizes.breakpoint-2xl": {
		value: "1536px",
		variable: "var(--sizes-breakpoint-2xl)",
	},
};

export function token(path, fallback) {
	return tokens[path]?.value || fallback;
}

function tokenVar(path, fallback) {
	return tokens[path]?.variable || fallback;
}

token.var = tokenVar;
