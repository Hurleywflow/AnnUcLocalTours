import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function MapContact() {
	return (
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
	);
}

export default MapContact;
