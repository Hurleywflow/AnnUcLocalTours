import { ToursAustralia } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = "Australia";

function DestinationsAustralia() {
	return <DestinationSections tours={ToursAustralia} title={title as string} />;
}

export default DestinationsAustralia;
