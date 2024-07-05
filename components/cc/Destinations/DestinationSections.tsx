import { Card, CardHeader } from "@/components/ui/card";
import type { TourType } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import { H4, H6 } from "../text-utils/TextUtils";
type Props = {
	tours: TourType[];
	title: string; // Add this line
};

function DestinationSections({ tours, title }: Readonly<Props>): JSX.Element {
	return (
		<Card className='w-full p-0'>
			<CardHeader className=''>
				<H4>{title}</H4>{" "}
			</CardHeader>
			<div className='grid w-full grid-cols-2 gap-1 md:gap-2 lg:grid-cols-3'>
				{tours.map((tour) => (
					<Link href={tour.link ?? "/"} key={tour.id}>
						<Card className='relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden shadow-lg md:aspect-video'>
							<Image
								src={tour.imageUrl ?? "Destination Image"}
								alt={tour.title ?? " Destination title"}
								className='object-cover object-center transition-all duration-300 ease-in-out hover:scale-110 hover:blur-[1px]'
								fill
								sizes='(max-width: 640px) 150px, (max-width: 768px) 220px, (max-width: 1024px) 320px, 320px'
							/>
							<div className='absolute inset-x-0 bottom-0 flex h-10 items-center justify-center bg-gradient-to-t from-background to-transparent'>
								<H6 className=''>{tour.title ?? " Destination title"}</H6>
							</div>
						</Card>
					</Link>
				))}
			</div>
		</Card>
	);
}

export default DestinationSections;
