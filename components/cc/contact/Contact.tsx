import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CardBooking } from "../form/CardBooking";
import { ShineBorderBasicDemo } from "../magicui/shine-border/ShineBorderBasicDemo";
import { SparklesTextContactDemo } from "../magicui/sparkles-text/SparklesTextContactDemo";
import { P } from "../text-utils/TextUtils";

function Contact() {
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-10'>
			<Card className='flex w-full flex-col items-center justify-center gap-10 pt-2'>
				<SparklesTextContactDemo />
				<P className='text-center'>
					If you have any questions, please do not hesitate to contact us. We
					are here to help and ensure you have the best experience possible.
				</P>
				<CardBooking />
				<div className='flex w-full items-center justify-center px-10'>
					<hr className='flex-1 border-t border-border' />
					<span className='px-2 text-sm'>OR CONTINUE WITH</span>
					<hr className='flex-1 border-t border-border' />
				</div>
				<Card className=' flex h-fit w-full flex-col items-center justify-center bg-background'>
					<CardHeader className='flex items-center justify-center'>
						<p className='text-pretty'>
							<span className='font-bold text-primary'>* </span>
							You can also reach out to us via email or through various
							platforms such as Facebook, SMS, Zalo, and WhatsApp for your
							convenience. Our team will get back to you as soon as possible.
						</p>
						<p className='text-pretty'>
							<span className='font-bold text-primary'>* </span> if you have any
							questions, please do not hesitate to contact us. We are here to
							help and ensure you have the best experience possible.
						</p>
					</CardHeader>
					<CardContent className='flex items-center justify-center'>
						<ShineBorderBasicDemo />
					</CardContent>
					<p className='text-balance text-center text-base font-medium'>
						<span className='font-bold text-primary'>* </span>
						<span className='font-bold text-primary'>* </span>
						<span className='font-bold text-primary'>* </span> Our trading hours
						are Monday to Sunday, 9:00 AM to 9:00 PM.{" "}
						<span className='font-bold text-primary'>* </span>
						<span className='font-bold text-primary'>* </span>
						<span className='font-bold text-primary'>* </span>
					</p>
				</Card>
				<Card className='relative h-40 w-full overflow-hidden'>
					<address>
						<Link
							href='https://www.google.com/maps/place/32+Longview+Cres,+Stanwell+Tops+NSW+2508/@-34.2206543,150.9795387,20.57z/data=!4m6!3m5!1s0x6b12ddc052fc1ba7:0x7663a41ada54cb82!8m2!3d-34.2206869!4d150.9796514!16s%2Fg%2F11cskb7qx_?entry=ttu'
							target='_blank'
						>
							<Suspense
								fallback={
									<div className='flex size-full max-h-screen flex-col items-center justify-center space-y-3 overflow-hidden bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5 ' />
											<Skeleton className='h-4 w-3/5 ' />
										</div>
									</div>
								}
							>
								<Image
									src='/Images/icons/address.webp'
									alt='address'
									fill
									className='object-cover object-center'
								/>
							</Suspense>
						</Link>
					</address>
				</Card>
			</Card>
		</div>
	);
}

export default Contact;
