"use client";
import { ToursAustralia } from "@/data/tours";
import DestinationSections from "./DestinationSections";
import { usePathname } from "next/navigation";
const titleVi = "TOURS TRONG NƯỚC AUSTRALIA";
const titleEn = "DOMESTIC TOURS";

function DestinationsAustralia() {
	const pathname = usePathname();

	const title = pathname === "/vi" ? titleVi : titleEn;
	return <DestinationSections tours={ToursAustralia} title={title as string} />;
}

export default DestinationsAustralia;
