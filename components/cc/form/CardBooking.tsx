import BookingForm from "@/components/cc/form/BookingForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { H5, Span } from "../text-utils/TextUtils";

export function CardBooking() {
	return (
		<Card className='flex w-full flex-col items-center justify-center'>
			<CardHeader className='flex items-center justify-center'>
				<H5>Booking</H5>
				<Span>
					{" "}
					Fill out the form below to inform us about your tour, and we'll
					respond promptly.
				</Span>
			</CardHeader>
			<CardContent className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
				<Card>
					<CardContent>
						<BookingForm />
					</CardContent>
				</Card>
				<div className='relative hidden w-full overflow-hidden rounded-[0.4rem] bg-background/80 p-1 backdrop-blur-md md:block'>
					<Image
						src='/Images/contact/form.webp'
						alt='Card'
						fill
						className='object-cover object-center'
					/>
				</div>
			</CardContent>
		</Card>
	);
}
