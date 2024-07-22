"use client";
import SparklesText from "./SparklesText";
import { usePathname } from "next/navigation";
export async function SparklesTextBlogslDemo() {
	const pathname = usePathname();

	return (
		<SparklesText
			text={
				pathname.includes("/vi")
					? "TOURS NỖI BẬT"
					: "OUR FEATURE TOURS"
			}
		/>
	);
}
