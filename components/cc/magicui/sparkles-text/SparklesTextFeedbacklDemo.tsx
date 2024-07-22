"use client";
import SparklesText from "./SparklesText";
import { usePathname } from "next/navigation";


export async function SparklesTextFeedbacklDemo() {
	const pathname = usePathname();
	return (
		<SparklesText
			text={
				pathname.includes("/vi")
					? "PHẢN HỒI CỦA KHÁCH HÀNG"
					: "CUSTOMER'S FEEDBACK"
			}
		/>
	);
}
