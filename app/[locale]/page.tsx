import { Container } from "@/components/cc/container/container";
import FloatingNav from "@/components/cc/floating-navbar/FloatingNavbar";
import Hero from "@/components/cc/hero/Hero";
import Loading from "@/components/cc/loading/Loading";
import TermCondition from "@/components/cc/term-conditions/TermCondition";
import dynamic from "next/dynamic";
const MapContact = dynamic(
	async () => import("@/components/cc/map/MapContact"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);

const Blogs = dynamic(async () => import("@/components/cc/blogs/Blogs"), {
	ssr: true,
	loading: () => <Loading />,
});
const MediaContactCard = dynamic(
	async () => import("@/components/cc/media-contact-card/MediaContactCard"),
	{
		ssr: true,
		loading: () => <Loading />,
	},
);
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
	// const t = useTranslations("HomePage");
	return (
		<main className='m-0 h-fit w-full p-0'>
			<Container>
				<div className='flex h-fit min-h-screen w-full flex-col items-center justify-center gap-20 overscroll-x-none'>
					<FloatingNav />
					<div className='h-screen w-full' id='home'>
						<Hero />
					</div>
					<div className='h-fit w-full gap-10' id='media-contact'>
						<MediaContactCard />
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
					<div className='h-fit w-full gap-10' id='conditions'>
						<TermCondition />
					</div>
					<div className='h-fit w-full gap-10' id='map'>
						<MapContact />
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Home;
