import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CardBooking } from "../form/CardBooking";
import { ShineBorderBasicDemo } from "../magicui/shine-border/ShineBorderBasicDemo";
import { SparklesTextContactDemo } from "../magicui/sparkles-text/SparklesTextContactDemo";
import { P } from "../text-utils/TextUtils";

function Contact() {
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-10'>
			<Card className='flex w-full flex-col items-center justify-center gap-10'>
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
						<p>
							<span className='font-bold text-primary'>* </span>
							You can also reach out to us via email or through various
							platforms such as Facebook, SMS, Zalo, and WhatsApp for your
							convenience. Our team will get back to you as soon as possible.
						</p>
						<p>
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
							href='https://maps.apple.com/?address=32%20Longview%20Cr,%20Stanwell%20Tops%20NSW%202508,%20Australia&ll=-34.220603,150.979629&q=32%20Longview%20Cr'
							target='_blank'
						>
							<Image
								src='/Images/icons/address.webp'
								alt='address'
								fill
								className='object-cover object-center'
							/>
						</Link>
					</address>
				</Card>
			</Card>
		</div>
	);
}

export default Contact;
