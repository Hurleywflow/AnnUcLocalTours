import { ToursVietNam } from "@/data/tours";
import DestinationSections from "./DestinationSections";
const title = "VietNam";

function DestinationsVietNam() {
	return <DestinationSections tours={ToursVietNam} title={title as string} />;
}

export default DestinationsVietNam;
