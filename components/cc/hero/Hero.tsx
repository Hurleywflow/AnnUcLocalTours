"use client";
import { H1, H6 } from "@/components/cc/text-utils/TextUtils";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/framer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AvatarCirclesDemo from "../avatar-circles/AvatarCirclesDemo";
import { BorderBeam } from "../magicui/boderBeam/BorderBeam";
import { ImagesSlider } from "./ImagesSlider";

function Hero(): JSX.Element {
	const pathname = usePathname();
	const images = [
		"/Images/hero/1.jpg",
		"/Images/hero/2.jpg",
		"/Images/hero/3.jpg",
		"/Images/hero/4.jpg",
		"/Images/hero/5.jpg",
		"/Images/hero/6.jpg",
		"/Images/hero/7.jpg",
		"/Images/hero/8.jpg",
		"/Images/hero/9.jpg",
		"/Images/hero/10.jpg",
		"/Images/hero/11.jpg",
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
					className='absolute bottom-0 z-10 flex size-fit flex-col items-center justify-center gap-2 p-2 md:gap-5'
				>
					<MotionDiv
						initial={{ opacity: 0.7, y: 40, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<H1 className='text-balance p-2 text-center font-dancing_script text-7xl font-light md:p-4 md:text-9xl  lg:p-6 lg:text-[10rem]'>
							G'day mate!
						</H1>
					</MotionDiv>
					<div className='relative flex w-fit flex-col items-center justify-center gap-2 rounded-[0.4rem] bg-background/50 p-2 md:gap-5'>
						<BorderBeam size={250} duration={12} delay={9} />
						<H6 className=''>
							{pathname.includes("/vi")
								? "Khám phá các thành phố sôi động, các vùng đất hoang  sơ và những bãi biển tuyệt đẹp với sự đồng hành của những hướng dẫn viên chuyên nghiệp."
								: "Discover lively cities, rugged wilderness, and beautiful beaches with the company of knowledgeable guides."}
						</H6>
						<Link href='/#feedback'>
							<Button className='flex items-center gap-5' variant='ghost'>
								<AvatarCirclesDemo /> <span>⭐⭐⭐⭐⭐</span>
							</Button>
						</Link>
					</div>
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
