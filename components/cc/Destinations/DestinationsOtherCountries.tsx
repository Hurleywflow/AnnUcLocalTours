"use client";
import { ToursOtherCountries, ToursOtherCountriesVi } from "@/data/tours";
import { usePathname } from "next/navigation";
import DestinationSections from "./DestinationSections";
const titleVi = "THAM QUAN NGOÀI NƯỚC ÚC";
const titleEn = "OVERSEAS TOURS";

function DestinationsOtherCountries() {
	const pathname = usePathname();
	const title = pathname === "/vi" ? titleVi : titleEn;
	const tours =
		pathname === "/vi" ? ToursOtherCountriesVi : ToursOtherCountries;
	return <DestinationSections tours={tours} title={title as string} />;
}

export default DestinationsOtherCountries;
