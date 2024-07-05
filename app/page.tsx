import { Container } from "@/components/cc/container/container";
import Hero from "@/components/cc/hero/Hero";
import Loading from "@/components/cc/loading/Loading";
import dynamic from "next/dynamic";

const Blogs = dynamic(async () => import("@/components/cc/blogs/Blogs"), {
	ssr: true,
	loading: () => <Loading />,
});
const Intro = dynamic(async () => import("@/components/cc/intro/Intro"), {
	ssr: true,
	loading: () => <Loading />,
});
const FeedBack = dynamic(
	async () => import("@/components/cc/feedback/FeedBack"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);
const OurTours = dynamic(
	async () => import("@/components/cc/our-tours/OurTours"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);
const Contact = dynamic(async () => import("@/components/cc/contact/Contact"), {
	ssr: true,
	loading: () => <Loading />,
});

const Home = (): JSX.Element => {
	return (
		<main className='m-0 h-fit w-full p-0'>
			<Container>
				<div className='flex h-fit min-h-screen w-full flex-col items-center justify-center gap-20 overscroll-x-none'>
					<div className='h-screen w-full' id='home'>
						<Hero />
					</div>
					<div className='h-fit w-full gap-10' id='intro'>
						<Intro />
					</div>
					<div className='h-fit w-full' id='blogs'>
						<Blogs />
					</div>
					<div className='h-fit w-full' id='our-tours'>
						<OurTours />
					</div>
					<div className='h-fit w-full' id='feedback'>
						<FeedBack />
					</div>
					<div className='h-fit w-full gap-10' id='contact'>
						<Contact />
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Home;
