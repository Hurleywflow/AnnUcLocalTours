import { Card } from "@/components/ui/card";
import DestinationsGeneral from "../Destinations/DestinationsGeneral";
import BoxRevealOurTourDemo from "../boxTextReveal/boxTextRevealOurTourDemo";
import { SparklesTextOurTourDemo } from "../magicui/sparkles-text/SparklesTextOurTourDemo";

function OurTours() {
	return (
		<Card className='flex flex-col items-center justify-center gap-10 p-2'>
			<div className='flex flex-col items-center justify-center gap-10 p-2'>
				<SparklesTextOurTourDemo />
				<BoxRevealOurTourDemo />
			</div>
			<DestinationsGeneral />
		</Card>
	);
}

export default OurTours;
