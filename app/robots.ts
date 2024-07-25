import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: [
				"/",
				"/en",
				"/vi",
				"/favicon.ico",
				"/opengraph-image.png",
				"/en/booking",
				"/vi/booking",
				"/en/blogs",
				"/vi/blogs",
				"/en/tours",
				"/vi/tours",
				"/en/blogs/*",
				"/vi/blogs/*",
				"/en/tours/*",
				"/vi/tours/*",

			],
			// not allow to show in google
			// disallow: "/studio",
		},
		sitemap: [
			`${process.env.BASE_URL}/sitemap.xml`,
			"https://annsuclocaltours.com/sitemap.xml",
		],
	};
}
