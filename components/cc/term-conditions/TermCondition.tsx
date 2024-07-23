"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { H5 } from "../text-utils/TextUtils";

function TermCondition() {
	const pathname = usePathname();
	return (
		<Card className='flex w-full flex-col items-center justify-center gap-10'>
			<CardHeader>
				<H5 className='text-center text-2xl font-bold'>
					{pathname.includes("/vi")
						? "Điều Khoản và Điều Kiện"
						: "Terms and Conditions"}
				</H5>
			</CardHeader>
			<CardContent>
				{pathname.includes("/vi") ? (
					<p className='text-pretty text-sm leading-loose'>
					  Ngoài ra các chuyến tham quan nhóm nhỏ đi riêng ngày yêu cầu nhắn
						Ngoài ra các chuyến tham quan nhóm nhỏ đi riêng ngày yêu cầu nhắn
						Ann để thiết kế riêng.
						<br />
						Liên hệ Ann (+61) 0401211890 tại Úc hoặc Zalo Viber Ann đều có.
						<br /><span className='font-bold text-primary'>*{" "} </span> Khách đọc kỹ chương trình và đăng ký chuyển khoản giữ ghế
						ngay tổng gói chuyến tham quan.
						<br /><span className='font-bold text-primary'>*{" "} </span> Pay ID 0401211890 hoặc:
						<br /><span className='font-bold text-primary'>*{" "} </span> ANZ bank
						<br /><span className='font-bold text-primary'>*{" "} </span> Account name: LE T T
						<br /><span className='font-bold text-primary'>*{" "} </span> BSB: 012430
						<br /><span className='font-bold text-primary'>*{" "} </span> Account number: 428651728
						<br /><span className='font-bold text-primary'>*{" "} </span> Hoặc tài khoản tại Việt Nam:
						<br /><span className='font-bold text-primary'>*{" "} </span> Account name: LE THI THỦY
						<br /><span className='font-bold text-primary'>*{" "} </span> Account number: 21908222
						<br /><span className='font-bold text-primary'>*{" "} </span> MB bank
						<br /><span className='font-bold text-primary'>*{" "} </span> Anh/chị vui lòng chụp lại hoá đơn gửi Ann để xác nhận đặt
						chỗ khi đã chuyển khoản.
						<br /><span className='font-bold text-primary'>*{" "} </span> Sau khi chuyển khoản vui lòng cung cấp số điện thoại để
						đoàn liên hệ đón trả khách.
						<br /><span className='font-bold text-primary'>*{" "} </span> Quý khách lưu ý được kỹ chương trình và đặt cọc đặt chỗ tham
						quan. Nếu không đủ số lượng khách để khởi hành, đoàn sẽ thông báo và
						hoàn lại tiền cọc 100% trước ngày khởi hành.
						<br /><span className='font-bold text-primary'>*{" "} </span> Trong trường hợp bị ảnh hưởng nghiêm trọng bởi thời tiết,
						đoàn không được phép khởi hành hoặc lý do khác, quý anh chị sẽ được
						thông báo trước ít nhất từ 1 ngày đến 1 tuần và hoàn lại 100% tiền
						cọc. ( thời gian và điểm đón sẽ được cập nhật sát ngày đi tùy vào
						thời tiết ).
						<br /><span className='font-bold text-primary'>*{" "} </span> Đoàn sẽ có tài xế, hướng dẫn đoàn song ngữ.
						<br /><span className='font-bold text-primary'>*{" "} </span> Cảm ơn các anh chị đã luôn tin tưởng Ann's Úc Local Tours.
						Chúc các anh chị 1 chuyến đi bình an và vui vẻ.
						<br /><span className='font-bold text-primary'>*{" "} </span> Mọi phản hồi và hình ảnh đoàn sẽ được sưu tầm và gửi lại cho
						khách trên trang{" "}
						<Link
							href='http://www.facebook.com/88.antour/'
							className='rounded-sm bg-secondary hover:bg-primary'
							target='_blank'
						>
							Ann's Úc Local Tours
						</Link>
					</p>
				) : (
					<p className='text-pretty text-sm'>
						In addition, for small group tours going on private days, please
						message Ann to plan for your own.
						<br /> Contact Ann (+61) 0401211890 in Australia or Zalo or Viber.
						<br /> <span className='font-bold text-primary'>*{" "} </span> Propective clients, please read the itinerary carefully and
						deposit funds to reserve the total tour package.
						<br /> <span className='font-bold text-primary'>*{" "} </span> Pay ID 0401211890 Or:
						<br /> <span className='font-bold text-primary'>*{" "} </span> ANZ bank
						<br /> <span className='font-bold text-primary'>*{" "} </span> Account name: LE T T
						<br /> <span className='font-bold text-primary'>*{" "} </span> BSB: 012430
						<br /> <span className='font-bold text-primary'>*{" "} </span> Account number: 428651728
						<br /> <span className='font-bold text-primary'>*{" "} </span> Or Ann's account in Vietnam:
						<br /> <span className='font-bold text-primary'>*{" "} </span> Account name: LE THI THUY
						<br /> <span className='font-bold text-primary'>*{" "} </span> Account number: 21908222
						<br /> <span className='font-bold text-primary'>*{" "} </span> MB bank
						<br /> <span className='font-bold text-primary'>*{" "} </span> Please take a photo of the receipt and send it to Ann to
						confirm the booking once the fund has been transferred.
						<br /> <span className='font-bold text-primary'>*{" "} </span> After transferring fund, please provide a phone number
						for the group to contact to pick up and drop off clients/tourists.
						<br /> <span className='font-bold text-primary'>*{" "} </span> Please note carefully the itinerary and deposit fund to
						book the tour. If there is not enough required numbers of clients
						for each tour, clients will be notified and refunded with 100%
						deposit before the planned departure date.
						<br /> <span className='font-bold text-primary'>*{" "} </span> In case of severe weather or other reasons, the group is
						unable to depart as planned, you will be notified at least from one
						day to one week in advance and 100% of the deposit will be refunded.
						(Time and pick up location will be advised closer to the departure
						date depending on the weather)
						<br /> <span className='font-bold text-primary'>*{" "} </span> The group will have a bilingual driver and tour guide.
						<br /> <span className='font-bold text-primary'>*{" "} </span> Thank you for always trusting Ann's Uc Local Tours. Wishing
						you all a safe and happy trip.
						<br /> <span className='font-bold text-primary'>*{" "} </span> All feedbacks and group photos will be collected and sent
						back to guests via{" "}
						<Link
							href='http://www.facebook.com/88.antour/'
							className='rounded-sm bg-secondary hover:bg-primary'
							target='_blank'
						>
							Ann's Úc Local Tours
						</Link>
					</p>
				)}
			</CardContent>
		</Card>
	);
}

export default TermCondition;
