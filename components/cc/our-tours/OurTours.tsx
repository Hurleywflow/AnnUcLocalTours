import { Card } from "@/components/ui/card";
import DestinationsAustralia from "../Destinations/DestinationsAustralia";
import DestinationsOtherCountries from "../Destinations/DestinationsOtherCountries";
import BoxRevealOurTourDemo from "../boxTextReveal/boxTextRevealOurTourDemo";
import { SparklesTextOurTourDemo } from "../magicui/sparkles-text/SparklesTextOurTourDemo";

function OurTours() {
	return (
		<Card className='flex flex-col items-center justify-center gap-10 p-2'>
			<div className='flex flex-col items-center justify-center gap-10 p-2'>
				<SparklesTextOurTourDemo />
				<BoxRevealOurTourDemo />
			</div>
			<DestinationsAustralia />
			<DestinationsOtherCountries />
		</Card>
	);
}

export default OurTours;
