// import createMiddleware from "next-intl/middleware";
// import { locales} from "./config";
// export default createMiddleware({
// 	// A list of all locales that are supported
// 	locales,

// 	// Used when no locale matches
// 	defaultLocale: "vi",
// });

// export const config = {
// 	// Match only internationalized pathnames
// 	matcher: ["/", "/(en|vi)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { locales } from "./config";

export default async function middleware(request: NextRequest) {
	// Step 1: Use the incoming request (example)
	const defaultLocale = request.headers.get("x-your-custom-locale") ?? "en";

	// Step 2: Create and call the next-intl middleware (example)
	const handleI18nRouting = createMiddleware({
		locales,
		defaultLocale: defaultLocale as "en" | "vi",
	});
	const response = handleI18nRouting(request);

	// Step 3: Alter the response (example)
	response.headers.set("x-your-custom-locale", defaultLocale);

	return response;
}

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(vi|en)/:path*"],
};
