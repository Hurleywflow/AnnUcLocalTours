import { Card } from "@/components/ui/card";
import BoxRevealDemo from "../boxTextReveal/boxTextRevealDemo";
import { SparklesTextDemo } from "../magicui/sparkles-text/SparklesTextDemo";

function Intro() {
	return (
		<Card className='flex flex-col items-center justify-center gap-10 p-2'>
			<SparklesTextDemo />
			<BoxRevealDemo />
		</Card>
	);
}

export default Intro;
