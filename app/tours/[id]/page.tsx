/* eslint-disable react/no-array-index-key */
import { CarouselWithThumbnails } from "@/components/cc/carousel/SplideThumbnailsCarousel";
import { H5 } from "@/components/cc/text-utils/TextUtils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToursAustralia, ToursOtherCountries } from "@/data/tours";

import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

function AustraliaTours({ params }: { params: { id: string } }) {
	const id = params.id;
	// concatenate the australiaTours and vietNamTours
	const allTours = [...ToursAustralia, ...ToursOtherCountries];
	const AllTours = allTours.find((tour) => tour.id === id);
	// check if the australiaTours exists
	if (!AllTours) {
		return notFound();
	}
	return (
		<div className='min-h-screen w-full py-10'>
			<div className='container mx-auto flex flex-col gap-14'>
				<div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
					<Link href='/#blogs'>
						<Button className='group gap-4'>
							View all Destination{" "}
							<MoveLeft className='size-4 transition-all duration-100 ease-linear hover:group-hover:-translate-x-3' />
						</Button>
					</Link>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-4 md:col-span-2'>
						<CarouselWithThumbnails
							slides={Array.isArray(AllTours.imageUrl) ? AllTours.imageUrl : []}
						/>
						<div className='flex flex-row items-center gap-4'>
							<Badge>⭐️⭐️⭐️⭐️⭐️</Badge>
						</div>
						<div className='flex flex-col gap-2'>
							<H5 className='text-start'>{AllTours.title}</H5>
							<p className=' mt-10 text-justify text-base '>
								{/* spred out the descriptions */}
								{AllTours?.description?.map((word, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<span key={`${word} +${index}`}>
										{word}
										<br />
										<br />
									</span>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AustraliaTours;
