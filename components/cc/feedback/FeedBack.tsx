import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import MarqueeDemo from "../magicui/marquee/MarqueeDemo";
import { SparklesTextFeedbacklDemo } from "../magicui/sparkles-text/SparklesTextFeedbacklDemo";
import { P } from "../text-utils/TextUtils";

function FeedBack() {
	return (
		<Card className='flex w-full flex-col items-center justify-center gap-10 p-2'>
			<SparklesTextFeedbacklDemo />
			{/* <ShineBorderBasicDemo /> */}
			<MarqueeDemo />
			<P className=''>
				We would greatly appreciate your feedback on your experience with us.
				Your positive feedback will help us improve our services and ensure you
				have a fantastic time on our tours. Thank you for considering sharing
				your experience with us!
			</P>
			<Link href='https://www.facebook.com/88.antour/reviews' target='_blank'>
				<Button className='flex h-fit  flex-col text-base'>
					<span className='animate-pulse'>Recommend Us 🌟🌟🌟🌟🌟</span>
					<span className='sr-only'>Submit Your Feedback</span>
				</Button>
			</Link>
		</Card>
	);
}

export default FeedBack;
