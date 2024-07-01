import { H1, P } from "@/components/cc/text-utils/TextUtils";
import { MotionDiv } from "@/lib/framer";
import AvatarCirclesDemo from "../avatar-circles/AvatarCirclesDemo";
import { BorderBeam } from "../magicui/boderBeam/BorderBeam";
import { ImagesSlider } from "./ImagesSlider";

function Hero(): JSX.Element {
	const images = [
		"/Images/Demo/5.webp",
		"/Images/Demo/6.webp",
		"/Images/Demo/7.webp",
		// "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];
	return (
		<div className=' flex h-fit w-full flex-col items-center justify-center'>
			{/* <BorderBeam size={250} duration={12} delay={9} /> */}
			<ImagesSlider className='relative h-fit min-h-svh' images={images}>
				<MotionDiv
					initial={{ opacity: 0.3, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.5,
						ease: "easeInOut",
					}}
					className='absolute bottom-20 z-10 flex h-fit w-4/5 flex-col items-center justify-center gap-2 rounded-[0.4rem] p-1 backdrop-blur-lg md:bottom-40'
				>
					<BorderBeam size={250} duration={12} delay={9} />
					<H1 className='text-balance p-2 text-center text-5xl font-light italic md:text-7xl lg:text-9xl'>
						G'day mate!
					</H1>
					<P className=''>
						Discover lively cities, rugged wilderness, and beautiful beaches
						with the help of knowledgeable guides.
					</P>
					<div className='flex items-center gap-5'>
						<AvatarCirclesDemo /> <span>⭐⭐⭐⭐⭐</span>
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
