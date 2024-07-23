"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { ShineBorderBasicDemo } from "../magicui/shine-border/ShineBorderBasicDemo";

function MediaContactCard() {
	const pathname = usePathname();
	return (
		<Card className=' flex h-fit w-full flex-col items-center justify-center bg-background'>
			<CardHeader className='flex items-center justify-center'>
				<p className='text-pretty'>
					<span className='font-bold text-primary'>* </span>

					{pathname.includes("/vi")
						? "Bạn cũng có thể liên hệ với chúng tôi qua email hoặc qua các nền tảng khác như Facebook, SMS, Zalo, và WhatsApp. Chúng tôi sẽ trả lời bạn sớm nhất có thể."
						: "You can also reach out to us via email or through various platforms such as Facebook, SMS, Zalo, and WhatsApp for your convenience. Our team will get back to you as soon as possible."}
				</p>
				<p className='text-pretty'>
					<span className='font-bold text-primary'>* </span>
					{pathname.includes("/vi")
						? "Nếu bạn có bất kỳ câu hỏi nào, xin đừng ngần ngại liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ trợ và đảm bảo bạn có trải nghiệm tốt nhất có thể."
						: "if you have any questions, please do not hesitate to contact us. We are here to help and ensure you have the best experience possible."}
				</p>
			</CardHeader>
			<CardContent className='flex items-center justify-center'>
				<ShineBorderBasicDemo />
			</CardContent>
			<p className='text-balance text-center text-base font-medium'>
				<span className='font-bold text-primary'>* </span>
				<span className='font-bold text-primary'>* </span>
				<span className='font-bold text-primary'>* </span>
				{pathname.includes("/vi")
					? " Giờ mở cửa: từ thứ Hai đến Chủ Nhật, 9 giờ sáng - 9 giờ tối."
					: "Our trading hours are Monday to Sunday, 9:00 AM to 9:00 PM."}
				<span className='font-bold text-primary'>* </span>
				<span className='font-bold text-primary'>* </span>
				<span className='font-bold text-primary'>* </span>
			</p>
		</Card>
	);
}

export default MediaContactCard;
