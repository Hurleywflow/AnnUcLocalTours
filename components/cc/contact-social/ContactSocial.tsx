import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import facebookIcon from "@/public/Images/icons/facebook.png";
import mailIcon from "@/public/Images/icons/mail.png";
import viberIccon from "@/public/Images/icons/viber.png";
import zaloIcon from "@/public/Images/icons/zalo.png";
import Image from "next/image";
import Link from "next/link";
function ContactSocial() {
	return (
		<Card className='flex h-12 flex-row items-center justify-center pt-[7px] '>
			<Link href='mailto:info@vietnamtour.com'>
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
			<Link href='mailto:info@vietnamtour.com'>
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
			<Link href='mailto:info@vietnamtour.com'>
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
			<Link href='mailto:info@vietnamtour.com'>
				<Button variant='ghost'>
					<Image
						src={viberIccon}
						alt='viber'
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
