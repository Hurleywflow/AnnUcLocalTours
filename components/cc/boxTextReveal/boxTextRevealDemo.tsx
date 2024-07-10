/* eslint-disable @typescript-eslint/require-await */
import { P } from "../text-utils/TextUtils";
import BoxReveal from "./BoxTextReveal";

function BoxRevealDemo() {
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.9}>
				<P className='text-balance text-start md:px-5 md:text-center lg:px-10'>
					<span className='font-bold text-primary'>* </span> The name "Local" in
					Ann's Uc Local Tours pays homage to our cherished friend, Aussie,
					whose unwavering support and presence enrich every tour. Aussie is our
					steadfast guide, navigating every inch of Australian terrain, ensuring
					each route is both safe and uniquely captivating. With us, your
					journey will be a blend of thrill and security.
					<br />
					<br />
					<span className='font-bold text-primary'>* </span> The best way to
					explore a destination is with those who call it home. We are your
					travel companions, experts, and friendly guides who know the area
					inside and out—from hidden art galleries to every little street. We
					promise it’s worth it. Whether you’re a family with young children,
					friends seeking an adventure, or retirees looking to unwind and savour
					the moments, we offer a variety of options to suit your interests.{" "}
					<br />
					<br />
					<span className='font-bold text-primary'>* </span> Leave the logistics
					to us. We’ll handle the planning and details, allowing you to relax,
					savour, and fully immerse yourself in the places you visit.
				</P>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealDemo;
