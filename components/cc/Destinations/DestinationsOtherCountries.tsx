import { ToursOtherCountries } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = "Other Destinations";

function DestinationsOtherCountries() {
	return (
		<DestinationSections tours={ToursOtherCountries} title={title as string} />
	);
}

export default DestinationsOtherCountries;
