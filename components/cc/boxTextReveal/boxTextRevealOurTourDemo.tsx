/* eslint-disable @typescript-eslint/require-await */
import Link from "next/link";
import BoxReveal from "./BoxTextReveal";

function BoxRevealOurTourDemo() {
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.9}>
				<h3 className='shadow-foreground-400 text-foreground text-shadow-lg text-balance px-10 text-center text-xl md:text-2xl'>
					<span className='text-primary font-bold'>* </span> Our regular tours
					are just the beginning. We offer an array of exciting adventures
					across Sydney, Melbourne, Adelaide, Brisbane (Gold Coast), Perth, and
					Tasmania. <br /> <br />
					<span className='text-primary font-bold'>* </span> In addition to our
					tours, we provide a range of services including airport transfers, car
					rentals with drivers, and transportation options from small cars to
					large buses. We also offer customized travel itinerary design,
					professional tour guides in Australia, and event organization
					including parties. We’re thrilled to announce new tours to Bali
					(Indonesia), Thailand, Vietnam, Japan, Korea, America, Europe, and New
					Zealand, perfect for those living in or traveling from Australia.{" "}
					<br /> <br />
					<span className='text-primary font-bold'>* </span> Stay updated on our
					destinations, get itinerary suggestions, and receive the latest travel
					information by following and liking our Facebook page at
					<Link href='https://www.facebook.com/88.antour/' target='_blank'>
						<div className='hover:text-primary hover:decoration-primary ml-1 inline underline underline-offset-2 hover:cursor-pointer hover:underline-offset-4'>
							Ann’s Uc Local Tours.
						</div>
					</Link>
				</h3>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealOurTourDemo;
