"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useLocale() {
	const router = useRouter();
	const [locale, setLocale] = useState("en");

	useEffect(() => {
		if (router.isReady) {
			const { locales, defaultLocale } = router;

			if (locales?.includes("vi")) {
				setLocale("vi");
			} else if (defaultLocale) {
				setLocale(defaultLocale);
			}
		}
	}, [router.isReady, router.locales, router.defaultLocale]);

	return locale;
}
