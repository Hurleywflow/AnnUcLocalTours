"use client";
import { ToursAustralia, ToursAustraliaVi } from "@/data/tours";
import { usePathname } from "next/navigation";
import DestinationSections from "./DestinationSections";
const titleVi = "TOURS TRONG NƯỚC AUSTRALIA";
const titleEn = "DOMESTIC TOURS";

function DestinationsAustralia() {
	const pathname = usePathname();

	const title = pathname === "/vi" ? titleVi : titleEn;
	const tours = pathname === "/vi" ? ToursAustraliaVi : ToursAustralia;
	return <DestinationSections tours={tours} title={title as string} />;
}

export default DestinationsAustralia;
