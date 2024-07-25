import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { locales } from "./config";

export default async function middleware(request: NextRequest) {
	// Step 1: Use the incoming request (example)
	const defaultLocale = request.headers.get("vi") as "vi" | "en" ?? "en";

	// Step 2: Create and call the next-intl middleware (example)
	const handleI18nRouting = createMiddleware({
		locales,
		defaultLocale,
	});
	const response = handleI18nRouting(request);

	// Step 3: Alter the response (example)
	response.headers.set("vi", defaultLocale);

	return response;
}

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(vi|en)/:path*"],
};
