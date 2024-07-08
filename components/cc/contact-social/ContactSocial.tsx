import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import facebookIcon from "@/public/Images/icons/facebook.png";
import mailIcon from "@/public/Images/icons/mail.png";
import sms from "@/public/Images/icons/sms.png";
import whatapp from "@/public/Images/icons/whatapp.png";
import zaloIcon from "@/public/Images/icons/zalo.png";
import Image from "next/image";
import Link from "next/link";
function ContactSocial() {
	return (
		<Card className='flex h-12 flex-row items-center justify-center pt-[7px] '>
			<Link href='mailto:anthuy.yellowpages@gmail.com'>
				<Button variant='ghost'>
					<Image
						src={mailIcon}
						alt='mail'
						width={40}
						height={40}
						className=''
					/>
				</Button>
			</Link>
			<Separator orientation='vertical' className=' h-10' />
			<Link href='https://www.facebook.com/88.antour/' target='_blank'>
				<Button variant='ghost'>
					<Image
						src={facebookIcon}
						alt='facebook'
						width={40}
						height={40}
						className=''
					/>
				</Button>
			</Link>
			<Separator orientation='vertical' className=' h-10' />
			<Link href='sms:61423099677;?&body=AnnsUcLocalTours'>
				<Button variant='ghost'>
					<Image src={sms} alt='sms' width={40} height={40} className='' />
				</Button>
			</Link>
			<Separator orientation='vertical' className=' h-10' />
			<Link href='tel:+61401211890'>
				<Button variant='ghost'>
					<Image
						src={zaloIcon}
						alt='zalo'
						width={40}
						height={40}
						className=''
					/>
				</Button>
			</Link>
			<Separator orientation='vertical' className=' h-10' />
			{/* <Link href='viber://chat?number=%2B610423099677'>
				<Button variant='ghost'>
					<Image
						src={viberIcon}
						alt='viber'
						width={40}
						height={40}
						className=''
					/>
				</Button>
			</Link> */}
			<Link href='tel:+61401211890'>
				<Button variant='ghost'>
					<Image
						src={whatapp}
						alt='whatapp'
						width={40}
						height={40}
						className=''
					/>
				</Button>
			</Link>
		</Card>
	);
}
export default ContactSocial;
