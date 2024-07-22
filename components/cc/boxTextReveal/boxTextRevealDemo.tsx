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
						? "Cách tốt nhất để khám phá một điểm đến là chúng ta có thể gọi đó là nhà. Chúng tôi là những người bạn đồng hành, chuyên gia và hướng dẫn viên thân thiện của bạn, những người am hiểu địa phương - từ các phòng trưng bày nghệ thuật đến mọi con phố nhỏ. Chúng tôi hứa nó thật sự đáng giá. Cho dù bạn là một gia đình có trẻ nhỏ, bạn bè đang tìm kiếm một sự trãi nghiệm mới hay những người về hưu muốn thư giãn và tận hưởng những khoảnh khắc, chúng tôi cung cấp nhiều lựa chọn phù hợp với sở thích của bạn."
						: "The best way to explore a destination is with those who call it home. We are your travel companions, experts, and friendly guides who know the area inside and out—from hidden art galleries to every little street. We promise it’s worth it. Whether you’re a family with young children, friends seeking an adventure, or retirees looking to unwind and savour the moments, we offer a variety of options to suit your interests."}
					<br />
					<br />
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Cái tên 'Local' trong Ann's Uc Local Tours bày tỏ sự cám ơn đối với người bạn yêu quý của chúng ta, Aussie, người có sự hỗ trợ và luôn hiện diện để làm phong phú thêm cho mọi chuyến tham quan. Aussie là hướng dẫn viên của chúng ta, điều hướng từng ngõ nghách của địa hình Úc, đảm bảo mỗi tuyến đường đều an toàn cùng sự quyến rũ độc đáo. Với chúng tôi, hành trình của bạn sẽ là sự pha trộn giữa cảm giác hồi hộp và an toàn."
						: "The name 'Local' in Ann's Uc Local Tours pays homage to our cherished friend, Aussie, whose unwavering support and presence enrich every tour. Aussie is our steadfast guide, navigating every inch of Australian terrain, ensuring each route is both safe and uniquely captivating. With us, your journey will be a blend of thrill and security."}
					<br />
					<br />
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Để lại phần hậu cần cho chúng tôi. Chúng tôi sẽ thu xếp việc lập kế hoạch chi tiết, cho phép bạn thư giãn, thưởng thức và đắm mình hoàn toàn vào những nơi bạn đến."
						: "Leave the logistics to us. We’ll handle the planning and details, allowing you to relax, savour, and fully immerse yourself in the places you visit."}
				</P>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealDemo;
