import { H1, H6 } from "@/components/cc/text-utils/TextUtils";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/framer";
import Link from "next/link";
import AvatarCirclesDemo from "../avatar-circles/AvatarCirclesDemo";
import { BorderBeam } from "../magicui/boderBeam/BorderBeam";
import { ImagesSlider } from "./ImagesSlider";

function Hero(): JSX.Element {
	const images = [
		"/Images/Demo/5.webp",
		"/Images/Demo/6.webp",
		"/Images/Demo/7.webp",
	];
	return (
		<div className=' flex h-screen w-full flex-col items-center justify-center'>
			{/* <BorderBeam size={250} duration={12} delay={9} /> */}
			<ImagesSlider className='relative h-screen w-full' images={images}>
				<MotionDiv
					// initial={{ opacity: 0.3, y: 50 }}
					// whileInView={{ opacity: 1, y: 0 }}
					// transition={{
					// 	delay: 0.3,
					// 	duration: 0.5,
					// 	ease: "easeInOut",
					// }}
					className='bg-background/70 absolute bottom-20 z-10 flex h-fit w-4/5 flex-col items-center justify-center gap-2 rounded-[0.4rem] p-2 backdrop-blur-sm lg:w-fit'
				>
					<BorderBeam size={250} duration={12} delay={9} />
					<MotionDiv
						initial={{ opacity: 0.7, y: 40, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<H1 className='font-dancing_script text-balance p-2 text-center text-7xl font-light md:p-4 md:text-9xl  lg:p-6 lg:text-[10rem]'>
							G'day mate!
						</H1>
					</MotionDiv>
					<H6 className=''>
						Discover lively cities, rugged wilderness, and beautiful beaches
						with the help of knowledgeable guides.
					</H6>
					<Link href='/#feedback'>
						<Button className='flex items-center gap-5' variant='ghost'>
							<AvatarCirclesDemo /> <span>⭐⭐⭐⭐⭐</span>
						</Button>
					</Link>
					{/* <Link href='tel:+12565462553'>
						<ShimmerButton className='text-center text-2xl font-bold md:text-6xl'>
							<AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 text-foreground '>
								<span>✨ Book Now</span>

							</AnimatedShinyText>
						</ShimmerButton>
					</Link> */}
				</MotionDiv>
			</ImagesSlider>
		</div>
	);
}
export default Hero;
