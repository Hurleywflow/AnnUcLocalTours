import { ToursOtherCountries } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = 'OVERSEAS TOURS'

function DestinationsOtherCountries() {
	return (
		<DestinationSections tours={ToursOtherCountries} title={title as string} />
	);
}

export default DestinationsOtherCountries;
