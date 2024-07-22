import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: [
				"/",
				"/favicon.ico",
				"opengraph-image.png",
				"/blogs",
				"/booking",
				"/tours",
				"/blogs/*",
				"/tours/*",
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
