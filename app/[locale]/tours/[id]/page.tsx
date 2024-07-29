"use client";
/* eslint-disable react/no-array-index-key */
import { CarouselWithThumbnails } from "@/components/cc/carousel/SplideThumbnailsCarousel";
import { H5, P } from "@/components/cc/text-utils/TextUtils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ToursAustralia,
	ToursAustraliaVi,
	ToursOtherCountries,
	ToursOtherCountriesVi,
} from "@/data/tours";

import { FloatingNav1 } from "@/components/cc/floating-navbar/FloatingNavbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import BookingDetailCard from '@/components/cc/booking-detail-card/BookingDetailCard';

function AustraliaTours({ params }: { params: { id: string } }) {
	const pathname = usePathname();
	// Check if the pathname includes "/vi" or "/en"
	const isEn = pathname.includes("/en");
	// Determine the locale based on the pathname
	let locale = "vi";
	if (isEn) {
		// Default locale
		locale = "en";
	}
	const id = params.id;
	// concatenate the australiaTours and vietNamTours
	const allTours = [...ToursAustralia, ...ToursOtherCountries];
	const allToursVi = [...ToursAustraliaVi, ...ToursOtherCountriesVi];
	const AllTours = allTours.find((tour) => tour.id === id);
	const AllToursVi = allToursVi.find((tour) => tour.id === id);

	if (!AllTours) {
		// check if the australiaTours exists
		return notFound();
	}
	if (!AllToursVi) {
		// check if the australiaTours exists
		return notFound();
	}

	return (
		<div className='relative min-h-screen w-full py-10'>
			<FloatingNav1 />
			<div className='container mx-auto flex flex-col gap-14'>
				<div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
					<Link href={`/${locale}/#our-tours`}>
						<Button className='group gap-4'>
							{pathname.includes("/vi") ? "Tất cả địa điểm" : "All Destination"}
							<MoveLeft className='size-4 transition-all duration-100 ease-linear hover:group-hover:-translate-x-3' />
						</Button>
					</Link>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-4 md:col-span-2'>
						{pathname.includes("/vi") ? (
							<CarouselWithThumbnails
								slides={
									Array.isArray(AllToursVi.imageUrl) ? AllToursVi.imageUrl : []
								}
							/>
						) : (
							<CarouselWithThumbnails
								slides={
									Array.isArray(AllTours.imageUrl) ? AllTours.imageUrl : []
								}
							/>
						)}

						<div className='flex flex-col items-start gap-4'>
							<Badge>⭐️⭐️⭐️⭐️⭐️</Badge>
							{pathname.includes("/vi")
								? AllToursVi?.price &&
									AllToursVi.price.length > 0 && (
										<Badge className='text-center text-base'>
											{AllToursVi?.price}
										</Badge>
									)
								: AllTours?.price &&
									AllTours.price.length > 0 && (
										<Badge className='text-center text-base'>
											{AllTours?.price}
										</Badge>
									)}
						</div>
						<div className='flex flex-col gap-10'>
							<H5 className='text-start'>
								{pathname.includes("/vi") ? AllToursVi.title : AllTours.title}
							</H5>

							{AllTours?.subTitle &&
							AllTours.subTitle.length > 1 &&
							AllToursVi?.subTitle &&
							AllToursVi.subTitle.length > 1 ? (
								<div className='grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2'>
									{pathname.includes("/vi")
										? AllToursVi?.subTitle &&
											AllToursVi.subTitle.length > 0 &&
											AllToursVi.subTitle.map((subTitleVi, index) => (
												<Card
													className='flex flex-col items-center justify-center gap-1 md:gap-2'
													key={`${index}-${subTitleVi.title}`}
												>
													<CardHeader>
														<P>{subTitleVi.title}</P>
													</CardHeader>
													<Separator className='' />
													<CardContent className='flex flex-col items-start justify-center gap-2 text-base'>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Giá:{" "}
															</span>
															{subTitleVi?.price}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Ngày khởi hành:
															</span>
															{subTitleVi?.departs}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Lịch trình:{" "}
															</span>
															{subTitleVi?.schedule?.map((schedule, index) => (
																<span
																	key={`${schedule}-${
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		index
																	}`}
																>
																	{schedule}
																	<br />
																</span>
															))}
														</p>
													</CardContent>
												</Card>
											))
										: AllTours?.subTitle &&
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
															<span className='text-lg font-medium md:text-xl'>
																- Price:{" "}
															</span>
															{subTitle?.price}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Departs:{" "}
															</span>
															{subTitle?.departs}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Schedule:{" "}
															</span>
															{subTitle?.schedule?.map((schedule, index) => (
																<span
																	key={`${schedule}-${
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		index
																	}`}
																>
																	{schedule}
																	<br />
																</span>
															))}
														</p>
													</CardContent>
												</Card>
											))}
								</div>
							) : (
								<div className='grid grid-cols-1 gap-1  md:gap-2'>
									{pathname.includes("/vi")
										? AllToursVi?.subTitle &&
											AllToursVi.subTitle.length > 0 &&
											AllToursVi.subTitle.map((subTitleVi, index) => (
												<Card
													className='flex flex-col items-center justify-center gap-1 md:gap-2'
													key={`${index}-${subTitleVi.title}`}
												>
													<CardHeader>
														<P>{subTitleVi.title}</P>
													</CardHeader>
													<Separator className='' />
													<CardContent className='flex flex-col items-start justify-center gap-2 text-base'>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Giá:{" "}
															</span>
															{subTitleVi?.price}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Ngày khởi hành:{" "}
															</span>
															{subTitleVi?.departs}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Lịch trình:{" "}
															</span>
															{subTitleVi?.schedule?.map((schedule, index) => (
																<span
																	key={`${schedule}-${
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		index
																	}`}
																>
																	{schedule}
																	<br />
																</span>
															))}
														</p>
													</CardContent>
												</Card>
											))
										: AllTours?.subTitle &&
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
															<span className='text-lg font-medium md:text-xl'>
																- Price:{" "}
															</span>
															{subTitle?.price}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Departs:{" "}
															</span>
															{subTitle?.departs}
														</p>
														<p>
															<span className='text-lg font-medium md:text-xl'>
																- Schedule:{" "}
															</span>
															{subTitle?.schedule?.map((schedule, index) => (
																<span
																	key={`${schedule}-${
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		index
																	}`}
																>
																	{schedule}
																	<br />
																</span>
															))}
														</p>
													</CardContent>
												</Card>
											))}
								</div>
							)}
							<p className='text-pretty text-base'>
								{/* spread out the descriptions */}
								{pathname.includes("/vi")
									? AllToursVi.description?.map((word, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<span key={`${word}-${index}`}>
												{word}
												<br />
												<br />
											</span>
										))
									: AllTours.description?.map((word, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<span key={`${word}-${index}`}>
												{word}
												<br />
												<br />
											</span>
										))}
							</p>
							<BookingDetailCard />
							<span className='text-primary text-base italic'>
								{pathname.includes("/vi")
									? "*** Nếu bạn quan tâm đến các tour du lịch riêng, vui lòng liên hệ với Ann để biết thêm thông tin. Các chuyến du lịch nước ngoài của chúng tôi là hoàn toàn theo yêu cầu và bộ phận lập kế hoạch sẽ hỗ trợ yêu cầu của bạn. ***"
									: `*** If you're interested in private tours, please contact Ann
								for more information. Our Overseas Tours are exclusively private
								and the scheduling department will assist with your
								requirements. ***`}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AustraliaTours;
