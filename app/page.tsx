import { Container } from "@/components/cc/container/container";
import VerticalParallaxTiltScroll from "@/components/cc/images-utils/verticalScroll/VerticalParallaxTiltScroll";
import { InfiniteMovingCardsDemo } from "@/components/cc/infinite-moving-cards/InfiniteMovingCardsDemo";
import Loading from "@/components/cc/loading/Loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const SkewScrollIntro: React.ComponentType = dynamic(
	async () => import("@/components/cc/skewScroll/SkewScroll"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);
const Intro = dynamic(async () => import("@/components/cc/intro/Intro"), {
	ssr: true,
	loading: () => <Loading />,
});

import { CarouselWithThumbnails } from "@/components/cc/carousel/SplideThumbnailsCarousel";
import Hero from "@/components/cc/hero/Hero";
// import OurTours from "@/components/cc/our-tours/OurTours";
const OurTours = dynamic(
	async () => import("@/components/cc/our-tours/OurTours"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);

const Home = () => {
	// const Home = async () => {
	// 	await new Promise((resolve) => {
	// 		setTimeout(resolve, 5000);
	// 	});
	return (
		<main className='m-0 h-fit w-full p-0'>
			<Container>
				<div className='relative w-full'>
					<div
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-sky-50'
						id='#home'
					>
						<Suspense fallback={<Loading />}>
							<Hero />
						</Suspense>
					</div>

					<div
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center flex-col gap-10 bg-background'
						id='#intro'
					>
						<SkewScrollIntro />
						<Intro />
					</div>
					<div
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background'
						id='#our-tours'
					>
						<OurTours />
					</div>
					<div className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background'>
						<Suspense fallback={<Loading />}>
							<VerticalParallaxTiltScroll />
						</Suspense>
					</div>
					<div className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background'>
						<Suspense fallback={<Loading />}>
							<InfiniteMovingCardsDemo />
						</Suspense>
					</div>
					<div className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-blue-400'>
						<Suspense fallback={<Loading />}>
							<CarouselWithThumbnails />
						</Suspense>
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Home;
