"use client";
import { usePathname } from "next/navigation";
import SparklesText from "./SparklesText";
export async function SparklesTextOurTourDemo() {
	const pathname = usePathname();
	return (
		<SparklesText
			text={
				pathname.includes("/vi") ? "CÁC CHUYẾN THAM QUAN THƯỜNG XUYÊN " : "OUR REGULAR TOURS"
			}
		/>
	);
}
