/* eslint-disable react/no-array-index-key */
import { CarouselWithThumbnails } from "@/components/cc/carousel/SplideThumbnailsCarousel";
import { H5, P } from "@/components/cc/text-utils/TextUtils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToursAustralia, ToursOtherCountries } from "@/data/tours";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
						<div className='flex flex-col items-start gap-4'>
							<Badge>⭐️⭐️⭐️⭐️⭐️</Badge>
							{AllTours?.price && AllTours.price.length > 0 && (
								<Badge className='text-center text-sm'>{AllTours?.price}</Badge>
							)}
						</div>
						<div className='flex flex-col gap-2'>
							<H5 className='text-start'>{AllTours.title}</H5>
							<div className='grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3'>
								{AllTours?.subTitle &&
									AllTours.subTitle.length > 0 &&
									AllTours.subTitle.map((subTitle, index) => (
										<Card
											className='flex flex-col items-center justify-center gap-1 md:gap-2'
											key={`${index}-${subTitle.title}`}
										>
											<CardHeader>
												<P>{subTitle.title}</P>
											</CardHeader>
											<Separator className='' />
											<CardContent className='flex flex-col items-start justify-center gap-2 text-base'>
												<p>
													<span className='font-semibold'>- Price: </span>
													{subTitle?.price}
												</p>
												<p>
													<span className='font-semibold'>- Departs: </span>
													{subTitle?.departs}
												</p>
												<p>
													<span className='font-semibold'>- Schedule: </span>
													{subTitle?.schedule}
												</p>
											</CardContent>
										</Card>
									))}
							</div>

							<p className=' mt-10 text-justify text-base '>
								{/* spread out the descriptions */}
								{AllTours.description?.map((word, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<span key={`${word}-${index}`}>
										{word}
										<br />
										<br />
									</span>
								))}
							</p>
							<span className='text-base italic text-primary'>
								*** If you're interested in private tours, please contact Ann
								for more information. Our Overseas Tours are exclusively private
								and the scheduling department will assist with your
								requirements. ***
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AustraliaTours;
