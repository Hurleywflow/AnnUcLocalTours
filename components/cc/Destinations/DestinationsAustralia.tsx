import { ToursAustralia } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = 'AUSTRALIA TOURS'

function DestinationsAustralia() {
	return <DestinationSections tours={ToursAustralia} title={title as string} />;
}

export default DestinationsAustralia;
