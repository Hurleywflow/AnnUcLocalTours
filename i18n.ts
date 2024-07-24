import { getRequestConfig } from "next-intl/server";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { notFound } from "next/navigation";
import { locales } from "./config";

// Can be imported from a shared config
// const locales = ["vi", "en"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`./messages/${locales}.json`)).default,
	};
});
