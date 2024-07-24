// A list of all locales that are supported

export const locales = ["vi", "en"] as const;

// ...
// next-intl.config.js
export default {
	defaultLocale: "vi", // Set 'vi' (Vietnamese) as the default locale
	locales: ["vi", "en"], // Add any other supported locales
};
