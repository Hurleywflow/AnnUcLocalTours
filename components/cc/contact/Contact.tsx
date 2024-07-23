"use client";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { usePathname } from "next/navigation";
import { CardBooking } from "../form/CardBooking";
import { SparklesTextContactDemo } from "../magicui/sparkles-text/SparklesTextContactDemo";
import { P } from "../text-utils/TextUtils";

function Contact() {
	const pathname = usePathname();
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-10'>
			<Card className='flex w-full flex-col items-center justify-center gap-10 pt-2'>
				<SparklesTextContactDemo />
				<P className='text-center'>
					{pathname.includes("/vi")
						? "Nếu bạn có bất kỳ câu hỏi nào, xin hãy liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ trợ bạn và đảm bảo bạn có trải nghiệm tốt nhất có thể."
						: "If you have any questions, please do not hesitate to contact us. We are here to help and ensure you have the best experience possible."}
				</P>
				<CardBooking />
				{/* continue with card */}
				{/* <div className='flex w-full items-center justify-center px-10'>
					<hr className='flex-1 border-t border-border' />
					<span className='px-2 text-sm'>OR CONTINUE WITH</span>
					<hr className='flex-1 border-t border-border' />
				</div> */}
			</Card>
		</div>
	);
}

export default Contact;
