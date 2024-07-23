"use client";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MarqueeDemo from "../magicui/marquee/MarqueeDemo";
import { SparklesTextFeedbacklDemo } from "../magicui/sparkles-text/SparklesTextFeedbacklDemo";
import { P } from "../text-utils/TextUtils";

function FeedBack() {
	const pathname = usePathname();
	return (
		<Card className='flex w-full flex-col items-center justify-center gap-10 py-2'>
			<SparklesTextFeedbacklDemo />
			{/* <ShineBorderBasicDemo /> */}
			<MarqueeDemo />
			<P className=''>
				{pathname.includes("/vi")
					? "Chúng tôi rất trân trọng phản hồi của du khách. Phản hồi mang tính xây dựng của bạn sẽ giúp chúng tôi cải thiện dịch vụ của mình và đảm bảo du khách có khoảng thời gian tuyệt vời trong các chuyến tham quan cùng chúng tôi. Cảm ơn bạn đã cân nhắc chia sẻ trải nghiệm của mình!"
					: "We would greatly appreciate your feedback on your experience with us. Your valuable feedback will help us improve our services and ensure you have a fantastic time on our tours. Thank you for considering sharing your experience with us!"}
			</P>
			<Link href='https://www.facebook.com/88.antour/reviews' target='_blank'>
				<Button className='flex h-fit  flex-col text-base'>
					<span className='animate-pulse'>
						{pathname.includes("/vi") ? "Phản hồi của bạn" : "Your Feedback"}
					</span>
					<span className='sr-only'>Submit Your Feedback</span>
				</Button>
			</Link>
		</Card>
	);
}

export default FeedBack;
