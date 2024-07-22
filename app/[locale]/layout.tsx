import Loading from "@/components/cc/loading/Loading";
import Navbar from "@/components/cc/navbar/Navbar";
import { TailwindIndicator } from "@/components/cc/tailwind-indicator/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { dancing_script, pinyon_script, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { Inter as FontSans } from "next/font/google";
const DynamicFooter = dynamic(
	async () => import("@/components/cc/footer/footer"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);
import "../globals.css";
import "@splidejs/react-splide/css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: "no",
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
	generator: "Next.js",
	applicationName: "NetCode",
	referrer: "origin-when-cross-origin",
	authors: [
		{ name: "Hurley" },
		{ name: "Nguyen", url: "https://www.annsuclocaltours.com" },
	],
	creator: "Hurley Nguyen",
	publisher: "Hurley Nguyen",
	title: "Ann's Uc Local Tours || Tourist Information Center",
	description:
		"Explore Sydney's hidden gems with Ann's Uc Local Tours. Expert guides, tailored experiences, and unforgettable adventures await!",
	metadataBase: new URL("https://www.annsuclocaltours.com"),
	keywords: [
		"Sydney",
		"Local Tours",
		"Tourist Information",
		"Expert Guides",
		"Tailored Experiences",
		"Hidden Gems",
		"Adventure",
		"Travel",
		"Australia",
		"Sightseeing",
		"Exploration",
		"Cultural Tours",
		"City Tours",
		"Customized Itineraries",
		"Tourist Attractions",
		"Travel Planning",
		"Guided Excursions",
		"Vacation Experiences",
		"Local Insights",
		"Authentic Travel",
		"Blue Mountains",
		"Harbour Bridge",
		"Opera House",
		"Bondi Beach",
		"Aboriginal Culture",
		"Wildlife Encounters",
		"Food and Wine Tours",
		"Historical Landmarks",
		"Eco-Tourism",
		"Photography Tours",
		"Coastal Walks",
		"Urban Exploration",
		"Night Tours",
		"Festival Experiences",
		"Art and Museum Tours",
		"Outdoor Activities",
		"Scenic Drives",
		"Local Markets",
		"Hidden Beaches",
		"Aussie Lifestyle",
	],
	// alternates: {
	// 	canonical: "https://www.annsuclocaltours.com/",
	// 	// languages: {
	// 	// 	"en-US": "https://www.annsuclocaltours.com/en",
	// 	// 	"vn-VN": "https://www.annsuclocaltours.com/vn",
	// 	// },
	// 	media: {
	// 		"only screen and (max-width: 600px)":
	// 			"https://www.annsuclocaltours.com/mobile",
	// 	},
	// 	types: {
	// 		"application/rss+xml": "https://www.annsuclocaltours.com/rss",
	// 	},
	// },
	openGraph: {
		title: "Ann's Uc Local Tours",
		description:
			"Explore Sydney's hidden gems with Ann's Uc Local Tours. Expert guides, tailored experiences, and unforgettable adventures await!",
		type: "website",
		url: "https://www.annsuclocaltours.com",
		siteName: "Ann's Uc Local Tours",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ann's Uc Local Tours",
		description:
			"Explore Sydney's hidden gems with Ann's Uc Local Tours. Expert guides, tailored experiences, and unforgettable adventures await!",
		images: {
			url: "/opengraph-image.png",
			width: 1200,
			height: 630,
		},
	},
};
export default async function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<html lang={locale} className='h-full ' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-fit m-0 p-0 bg-background font-sans antialiased bg-dot-white/[0.2]  dark:bg-dot-white/[0.2] overflow-x-clip",
					fontSans.variable,
					`${poppins} `,
					`${dancing_script} `,
					`${pinyon_script} `,
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute='class'
						enableSystem
						disableTransitionOnChange
					>
						<Navbar />
						{children}
						<DynamicFooter />
					</ThemeProvider>
					<Toaster richColors />
					<Analytics />
					<SpeedInsights />
					<TailwindIndicator />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
