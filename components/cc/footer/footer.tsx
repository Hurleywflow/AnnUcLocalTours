import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<Card className=' w-full  border-border  pt-2 text-center  '>
				<small className='mb-2 block text-xs'>
					Copyright &copy; {year} Ann's Uc Local Tours. All rights reserved.
				</small>
				<div className='mb-3 text-xs'>
					<span className='font-semibold'>About this website:</span> Designed
					and built by
					<Link href='https://netcodedev.com' target='_blank'>
						<Button className='m-1 h-4 animate-pulse p-0' variant='ghost'>
							NetCode
						</Button>
					</Link>
				</div>
			</Card>
		</footer>
	);
};
export default Footer;
