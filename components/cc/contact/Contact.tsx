"use client";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { usePathname } from "next/navigation";
import { CardBooking } from "../form/CardBooking";
import { SparklesTextContactDemo } from "../magicui/sparkles-text/SparklesTextContactDemo";
import { P } from "../text-utils/TextUtils";

function Contact() {
	const pathname = usePathname();
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-10'>
			<Card className='flex w-full flex-col items-center justify-center gap-10 pt-2'>
				<SparklesTextContactDemo />
				<P className='text-center'>
					{pathname.includes("/vi")
						? "Nếu bạn có bất kỳ câu hỏi nào, xin hãy liên hệ với chúng tôi. Chúng tôi ở đây để hỗ trợ bạn và đảm bảo bạn có trải nghiệm tốt nhất có thể."
						: "If you have any questions, please do not hesitate to contact us. We are here to help and ensure you have the best experience possible."}
				</P>
				<CardBooking />
				{/* continue with card */}
				{/* <div className='flex w-full items-center justify-center px-10'>
					<hr className='flex-1 border-t border-border' />
					<span className='px-2 text-sm'>OR CONTINUE WITH</span>
					<hr className='flex-1 border-t border-border' />
				</div> */}
				{/* map address card */}
				<Card className='relative h-40 w-full overflow-hidden'>
					<address>
						<Link
							href='https://www.google.com/maps/place/Sydney+Opera+House/@-35.8092221,145.2490189,7z/data=!4m20!1m13!4m12!1m4!2m2!1d144.5574042!2d-37.7091052!4e1!1m6!1m2!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!2sSydney+Opera+House,+Bennelong+Point,+Sydney+NSW+2000!2m2!1d151.2152967!2d-33.8567844!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu'
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
