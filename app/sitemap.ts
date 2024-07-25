import { blogData } from "@/data/blogs";
import { ToursAustralia, ToursOtherCountries } from "@/data/tours";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	// concatenate the australiaTours and vietNamTours
	const allTours = [...ToursAustralia, ...ToursOtherCountries];
	const postEntries = allTours.map((post) => ({
		url: `${process.env.BASE_URL}/en/tours/${post.id}`,
		// changeFrequency: "daily",
		lastModified: new Date(),
		priority: 1.0,
	}));
	const postEntries1 = blogData.map((post) => ({
		url: `${process.env.BASE_URL}/en/blogs/${post.id}`,
		// changeFrequency: "daily",
		lastModified: new Date(),
		priority: 1.0,
	}));
	const postEntries2 = allTours.map((post) => ({
		url: `${process.env.BASE_URL}/vi/tours/${post.id}`,
		// changeFrequency: "daily",
		lastModified: new Date(),
		priority: 1.0,
	}));
	const postEntries3 = blogData.map((post) => ({
		url: `${process.env.BASE_URL}/vi/blogs/${post.id}`,
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
			url: `${process.env.BASE_URL}/favicon.ico`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/en`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/en/booking`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/en/blogs`,
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: `${process.env.BASE_URL}/en/tours`,
			lastModified: new Date(),
			priority: 0.6,
		},
		{
			url: `${process.env.BASE_URL}/vi`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/vi/booking`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${process.env.BASE_URL}/vi/blogs`,
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: `${process.env.BASE_URL}/vi/tours`,
			lastModified: new Date(),
			priority: 0.6,
		},

		...postEntries,
		...postEntries1,
		...postEntries2,
		...postEntries3,
	];
}
