import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/", "/blogs", "/destinations"],
			// not allow to show in google
			// disallow: "/studio",
		},
		sitemap: `${process.env.BASE_URL}/sitemap.xml`,
	};
}
