import site from "~/config/site";

/**
 * Constructs the site title convention out of the current page title:
 *
 * ```ts
 * constructSiteTitle("About") // "About | Philly JS Club"
 * ```
 * @param {string} pageTitle - The current page title
 * @returns {string} The page title including the site title
 */
export function constructSiteTitle(pageTitle?: string): string {
	if (!pageTitle) return site.title;
	return `${pageTitle} | ${site.title}`;
}

export function groupBy<T, K extends number | string>(
	items: T[],
	getKey: (item: T) => K
) {
	const grouped = {} as Record<K, T[] | undefined>;

	for (const item of items) {
		(grouped[getKey(item)] ??= []).push(item);
	}

	return grouped as Record<K, T[]>;
}

/**
 * Capitalizes the first letter in a string
 * @param {string} text
 * @returns {string} the resulted string
 */
export function upperFirst(text: string): string {
	return text[0].toUpperCase() + text.slice(1);
}
