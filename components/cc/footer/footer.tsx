import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();
	return (
		<footer className=' w-full border-t border-border bg-neutral-100 pt-2 text-center text-foreground dark:bg-background dark:text-foreground'>
			<small className='mb-2 block text-xs'>
				Copyright &copy; {year} Ann's Uc Local Tours. All rights reserved.
			</small>
			<div className='mb-3 text-xs'>
				<span className='font-semibold'>About this website:</span> Designed and
				built by
				<Link href='https://netcodedev.com' target='_blank'>
					<Button className='m-1 h-4 animate-pulse p-0' variant='ghost'>
						NetCode
					</Button>
				</Link>
			</div>
		</footer>
	);
};
export default Footer;
