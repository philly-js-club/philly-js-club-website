/* eslint-disable */
export type Token =
	| "fontSizes.smallerJosh"
	| "fontSizes.smallJosh"
	| "fontSizes.mediumJosh"
	| "fontSizes.largeJosh"
	| "fontSizes.largerJosh"
	| "fontSizes.titleJosh"
	| "fontSizes.wat"
	| "breakpoints.sm"
	| "breakpoints.md"
	| "breakpoints.lg"
	| "breakpoints.xl"
	| "breakpoints.2xl"
	| "sizes.breakpoint-sm"
	| "sizes.breakpoint-md"
	| "sizes.breakpoint-lg"
	| "sizes.breakpoint-xl"
	| "sizes.breakpoint-2xl";

export type FontSizeToken =
	| "smallerJosh"
	| "smallJosh"
	| "mediumJosh"
	| "largeJosh"
	| "largerJosh"
	| "titleJosh"
	| "wat";

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl";

export type SizeToken =
	| "breakpoint-sm"
	| "breakpoint-md"
	| "breakpoint-lg"
	| "breakpoint-xl"
	| "breakpoint-2xl";

export type AnimationName = "spin" | "ping" | "pulse" | "bounce";

export type Tokens = {
	fontSizes: FontSizeToken;
	breakpoints: BreakpointToken;
	sizes: SizeToken;
	animationName: AnimationName;
} & { [token: string]: never };

export type TokenCategory =
	| "zIndex"
	| "opacity"
	| "colors"
	| "fonts"
	| "fontSizes"
	| "fontWeights"
	| "lineHeights"
	| "letterSpacings"
	| "sizes"
	| "shadows"
	| "spacing"
	| "radii"
	| "borders"
	| "durations"
	| "easings"
	| "animations"
	| "blurs"
	| "gradients"
	| "breakpoints"
	| "assets";
