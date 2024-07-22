import { getRequestConfig } from "next-intl/server";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "vi"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
