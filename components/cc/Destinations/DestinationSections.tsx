"use client";
import { Card, CardHeader } from "@/components/ui/card";
import type { TourType } from "@/data/tours";
import { MotionDiv } from "@/lib/framer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { H4, H6 } from "../text-utils/TextUtils";

type DestinationSectionProps = {
	tours: TourType[]; // Assuming TourType is the type of your tour objects
	title: string;
};

function DestinationSections({
	tours,
	title,
}: Readonly<DestinationSectionProps>): JSX.Element {
	const pathname = usePathname();
	// Check if the pathname includes "/vi" or "/en"
	const isEn = pathname.includes("/en");

	// Determine the locale based on the pathname
	let locale = "vi";
	if (isEn) {
		// Default locale
		locale = "en";
	}
	return (
		<Card className='w-full p-0'>
			<CardHeader className='text-center'>
				<H4>{title}</H4>
				<span className='italic text-primary'>
					{pathname.includes("/vi")
						? "* Bạn có thể xem thêm chi tiết mỗi chuyến tham quan để xem lịch trình, thời gian, ngày, bộ phận và giá cả."
						: "* You can visit each tour to view the schedule, time, date, department, price, and details of each tour."}
				</span>
				<br />
			</CardHeader>
			<div className='grid w-full grid-cols-2 gap-1 md:gap-2 lg:grid-cols-3'>
				{tours.map((tour) => (
					<MotionDiv
						key={tour.id}
						initial={{ opacity: 0.5, y: 40, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							// delay: 0.2,
							duration: 0.3,
							ease: "linear",
						}}
					>
						<Link href={`/${locale}/tours/${tour.id}`}>
							<Card className='relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden shadow-lg md:aspect-video'>
								<Image
									src={tour.imageUrl?.[0] ?? "Destination Image"}
									alt={tour.title ?? " Destination title"}
									className='object-cover object-center transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80'
									fill
									sizes='(max-width: 640px) 150px, (max-width: 768px) 220px, (max-width: 1024px) 320px, 320px'
								/>
								<div className='absolute inset-x-0 bottom-0 flex h-20 items-center justify-center bg-gradient-to-t from-background to-transparent'>
									<H6 className='font-poppins font-medium'>
										{tour.title ?? " Destination title"}
									</H6>
								</div>
							</Card>
						</Link>
					</MotionDiv>
				))}
			</div>
		</Card>
	);
}
export default DestinationSections;
