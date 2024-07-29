import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales, pathnames } from "./config";

export default createMiddleware({
	defaultLocale,
	locales,
	localePrefix,
	pathnames,
	// localeDetection: false, // Disables automatic locale detection
});

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		"/",
		"/vi",

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		"/(en|vi)/:path*",

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		"/((?!_next|_vercel|.*\\..*).*)",
	],
};
