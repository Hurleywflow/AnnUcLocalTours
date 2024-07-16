import { ToursAustralia } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = 'DOMESTIC TOURS'

function DestinationsAustralia() {
	return <DestinationSections tours={ToursAustralia} title={title as string} />;
}

export default DestinationsAustralia;
