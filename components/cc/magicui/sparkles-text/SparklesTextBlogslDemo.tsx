"use client";
import { usePathname } from "next/navigation";
import SparklesText from "./SparklesText";
export async function SparklesTextBlogslDemo() {
	const pathname = usePathname();

	return (
		<SparklesText
			text={pathname.includes("/vi") ? "TOURS NỖI BẬT" : "OUR FEATURE TOURS"}
		/>
	);
}
