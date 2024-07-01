import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import MarqueeDemo from "../magicui/marquee/MarqueeDemo";
import { ShineBorderBasicDemo } from "../magicui/shine-border/ShineBorderBasicDemo";
import { P } from "../text-utils/TextUtils";

function FeedBack() {
	return (
		<Card className='flex flex-col items-center justify-center gap-10 p-2 w-full'>
			<ShineBorderBasicDemo />
			<MarqueeDemo />
			<P className=''>
				We would greatly appreciate your feedback on your experience with us.
				Your positive feedback will help us improve our services and ensure you
				have a fantastic time on our tours. Thank you for considering sharing
				your experience with us!
			</P>
			<Link href='/'>
				<Button className='text-base flex flex-col h-fit ' variant='secondary'>
					Submit 🌟🌟🌟🌟🌟 Feedback
					<span className='sr-only'>Submit Your Feedback</span>
				</Button>
			</Link>
		</Card>
	);
}

export default FeedBack;
