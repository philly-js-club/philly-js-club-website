import { mapObject } from "../helpers.js";
import { css } from "../css/index.js";

const visuallyHiddenConfig = {
	transform(props) {
		return {
			srOnly: true,
			...props,
		};
	},
};

export const getVisuallyHiddenStyle = (styles = {}) =>
	visuallyHiddenConfig.transform(styles, { map: mapObject });

export const visuallyHidden = (styles) => css(getVisuallyHiddenStyle(styles));
visuallyHidden.raw = getVisuallyHiddenStyle;
