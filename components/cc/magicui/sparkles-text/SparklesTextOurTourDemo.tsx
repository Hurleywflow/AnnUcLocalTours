"use client";
import SparklesText from "./SparklesText";
import { usePathname } from "next/navigation";
export async function SparklesTextOurTourDemo() {
	const pathname = usePathname();
	return (
		<SparklesText
			text={
				pathname.includes("/vi")
					? "TOURS THƯỜNG XUYÊN "
					: "OUR REGULAR TOURS"
			}
		/>
	);
}
