import { blogData } from "@/data/blogs";
import { ToursAustralia, ToursOtherCountries } from "@/data/tours";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	// concatenate the australiaTours and vietNamTours
	const allTours = [...ToursAustralia, ...ToursOtherCountries];
	const postEntries = allTours.map((post) => ({
		url: `${process.env.BASE_URL}/tours/${post.id}`,
		// changeFrequency: "daily",
		lastModified: new Date(),
		priority: 1.0,
	}));
	const postEntries1 = blogData.map((post) => ({
		url: `${process.env.BASE_URL}/blogs/${post.id}`,
		// changeFrequency: "daily",
		lastModified: new Date(),
		priority: 1.0,
	}));

	return [
		{
			url: `${process.env.BASE_URL}`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/booking`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/favicon.ico`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/blogs`,
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: `${process.env.BASE_URL}/tours`,
			lastModified: new Date(),
			priority: 0.6,
		},
		...postEntries,
		...postEntries1,
	];
}
