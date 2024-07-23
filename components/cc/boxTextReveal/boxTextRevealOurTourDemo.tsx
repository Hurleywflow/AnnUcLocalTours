"use client";
/* eslint-disable @typescript-eslint/require-await */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { P } from "../text-utils/TextUtils";
import BoxReveal from "./BoxTextReveal";

function BoxRevealOurTourDemo() {
	const pathname = usePathname();
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.5}>
				<P className='text-pretty tracking-normal md:px-5 lg:px-10'>
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Các chuyến tham quan thường xuyên của chúng tôi chỉ là sự khởi đầu. Chúng tôi cung cấp một loạt các cuộc phiêu lưu thú vị trên khắp Sydney, Melbourne, Adelaide, Brisbane (Gold Coast), Perth và Tasmania."
						: "Our regular tours are just the beginning. We offer an array of exciting adventures across Sydney, Melbourne, Adelaide, Brisbane (Gold Coast), Perth, and Tasmania."}
					<br /> <br />
					<span className='font-bold text-primary'>* </span>{" "}
					{pathname.includes("/vi")
						? "Ngoài các tour du lịch, chúng tôi cung cấp một loạt các dịch vụ bao gồm đưa đón sân bay, cho thuê xe hơi có tài xế và các lựa chọn giao thông từ ô tô đến xe buýt. Chúng tôi cũng cung cấp thiết kế hành trình du lịch theo yêu câu, hướng dẫn viên du lịch chuyên nghiệp ở Úc và tổ chức sự kiện bao gồm cả các bữa tiệc. Chúng tôi rất vui mừng thông báo các tour du lịch mới đến Bali (Indonesia), Thái Lan, Việt Nam, Nhật Bản, Hàn Quốc, Mỹ, Châu Âu và New Zealand, phù hợp cho những du khách sống hoặc đi du lịch từ Úc."
						: "In addition to our tours, we provide a range of services including airport transfers, car rentals with drivers, and transportation options from small cars to large buses. We also offer customized travel itinerary design, professional tour guides in Australia, and event organization including parties. We’re thrilled to announce new tours to Bali (Indonesia), Thailand, Vietnam, Japan, Korea, America, Europe, and New Zealand, perfect for those living in or traveling from Australia."}
					<br /> <br />
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Luôn cập nhật về các điểm đến, nhận đề xuất hành trình và nhận thông tin du lịch mới nhất bằng cách theo dõi và thích trang Facebook của chúng tôi tại"
						: "Stay updated on our destinations, get itinerary suggestions, and receive the latest travel information by following and liking our Facebook page at"}
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
