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
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae eum unde explicabo molestias non hic fugiat sed
							sapiente perspiciatis fugit quisquam tempora consectetur laborum
							voluptate illo atque ullam, rerum exercitationem!
						</p>
					</CardHeader>
					<CardContent>
						<ShineBorderBasicDemo />
					</CardContent>
				</Card>
				<Card className='relative h-40 w-full overflow-hidden'>
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
				</Card>
			</Card>
		</div>
	);
}

export default Contact;
