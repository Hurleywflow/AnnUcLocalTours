import { Container } from "@/components/cc/container/container";
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
import FeedBack from "@/components/cc/feedback/FeedBack";
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
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background overscroll-x-auto'
						id='#home'
					>
						<Suspense fallback={<Loading />}>
							<Hero />
						</Suspense>
					</div>

					<div
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center flex-col gap-10 bg-background overscroll-x-auto'
						id='#intro'
					>
						<SkewScrollIntro />
						<Intro />
					</div>
					<div
						className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background overscroll-x-auto'
						id='#our-tours'
					>
						<OurTours />
					</div>
					<div className='sticky top-0 flex h-fit min-h-screen w-full items-center justify-center bg-background overscroll-x-auto'>
						<Suspense fallback={<Loading />}>
							<FeedBack />
						</Suspense>
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Home;
