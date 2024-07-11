/* eslint-disable @typescript-eslint/require-await */
import Link from "next/link";
import { P } from "../text-utils/TextUtils";
import BoxReveal from "./BoxTextReveal";

function BoxRevealOurTourDemo() {
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.9}>
				<P className='text-pretty tracking-normal md:px-5 lg:px-10'>
					<span className='font-bold text-primary'>* </span> Our regular tours
					are just the beginning. We offer an array of exciting adventures
					across Sydney, Melbourne, Adelaide, Brisbane (Gold Coast), Perth, and
					Tasmania. <br /> <br />
					<span className='font-bold text-primary'>* </span> In addition to our
					tours, we provide a range of services including airport transfers, car
					rentals with drivers, and transportation options from small cars to
					large buses. We also offer customized travel itinerary design,
					professional tour guides in Australia, and event organization
					including parties. We’re thrilled to announce new tours to Bali
					(Indonesia), Thailand, Vietnam, Japan, Korea, America, Europe, and New
					Zealand, perfect for those living in or traveling from Australia.{" "}
					<br /> <br />
					<span className='font-bold text-primary'>* </span> Stay updated on our
					destinations, get itinerary suggestions, and receive the latest travel
					information by following and liking our Facebook page at
					<Link href='https://www.facebook.com/88.antour/' target='_blank'>
						<span className='ml-1 inline underline underline-offset-2 hover:cursor-pointer hover:text-primary hover:decoration-primary hover:underline-offset-4'>
							Ann’s Uc Local Tours.
						</span>
					</Link>
				</P>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealOurTourDemo;
