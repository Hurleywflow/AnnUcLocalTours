"use client";
import { usePathname } from "next/navigation";
/* eslint-disable @typescript-eslint/require-await */
import { P } from "../text-utils/TextUtils";
import BoxReveal from "./BoxTextReveal";
function BoxRevealDemo() {
	const pathname = usePathname();
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.5}>
				<P className='text-pretty tracking-normal md:px-5 lg:px-10'>
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Cách tốt nhất để khám phá một điểm đến là chúng ta có thể xem đó là nhà. Chúng tôi là những người bạn đồng hành, chuyên gia và hướng dẫn viên thân thiện của bạn, những người am hiểu địa phương - từ các phòng trưng bày nghệ thuật đến từng con phố nhỏ. Chúng tôi cam kết nó thật sự đáng giá. Dù bạn là gia đình có trẻ nhỏ, bạn bè đang tìm kiếm sự trãi nghiệm mới hay những người về hưu muốn thư giãn và tận hưởng những khoảnh khắc, chúng tôi cung cấp nhiều lựa chọn phù hợp với sở thích của bạn."
						: "The best way to explore a destination is with those who call it home. We are your travel companions, experts, and friendly guides who know the area inside and out—from hidden art galleries to every little street. We promise it’s worth it. Whether you’re a family with young children, friends seeking an adventure, or retirees looking to unwind and savour the moments, we offer a variety of options to suit your interests."}
					<br />
					<br />
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Để lại phần hậu cần cho chúng tôi. Chúng tôi sẽ thu xếp việc lập kế hoạch chi tiết, để bạn thư giãn, thưởng thức và đắm mình hoàn toàn vào những điểm đến."
						: "Leave the logistics to us. We’ll handle the planning and details, allowing you to relax, savour, and fully immerse yourself in the places you visit."}
				</P>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealDemo;
