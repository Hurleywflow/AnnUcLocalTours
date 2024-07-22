"use client";
import { ToursOtherCountries } from "@/data/tours";
import { usePathname } from "next/navigation";
import DestinationSections from "./DestinationSections";
const titleVi = "TOURS NGOÀI NƯỚC AUSTRALIA";
const titleEn = "OVERSEAS TOURS";

function DestinationsOtherCountries() {
	const pathname = usePathname();
	const title = pathname === "/vi" ? titleVi : titleEn;
	return (
		<DestinationSections tours={ToursOtherCountries} title={title as string} />
	);
}

export default DestinationsOtherCountries;
