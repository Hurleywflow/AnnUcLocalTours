import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormBookingDetail from "../form-booking-detail/FormBookingDetail";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { H5 } from "../text-utils/TextUtils";

function BookingDetailCard() {
	const pathname = usePathname();
	return (
		<Card className='flex w-full flex-col items-center justify-center gap-10 p-2'>
			<CardHeader className='flex w-full items-center justify-center gap-10'>
				<H5 className='text-pretty'>
					{pathname.includes("/vi") ? "Đặt chỗ" : "Booking"}
				</H5>
				<span className='sr-only'>Submit Your Booking</span>
				<div className=''>
					{pathname.includes("/vi") ? (
						<p className='text-pretty text-base'>
							Khi đặt chỗ, chúng tôi khuyến khích bạn nên thanh toán bằng một
							trong các phương thức sau:
							<br /> Bạn có thể sử dụng Mã thanh toán 0401211890, hoặc chuyển
							khoản trực tiếp vào tài khoản ngân hàng ANZ với các thông tin chi
							tiết:
							<br />- Tên tài khoản: LE T T
							<br /> - BSB: 012430
							<br /> - Số tài khoản: 428651728
							<br />
							<br /> Ngoài ra, bạn có thể thanh toán vào tài khoản của Ann tại
							Việt Nam với các thông tin chi tiết:
							<br /> - Tên tài khoản: LE THI THUY
							<br /> - Số tài khoản: 21908222
							<br /> - Ngân hàng MB
							<br />
							<br /> Sau khi thanh toán, vui lòng sử dụng mã tham chiếu thanh
							toán để điền vào biểu mẫu đặt chỗ bên dưới. Sau khi nhận được
							thanh toán và số lượng người tham gia tour của bạn, chúng tôi sẽ
							gửi email hoặc tin nhắn xác nhận để thông báo việc đặt tour của
							bạn đã thành công và bạn đã sẵn sàng cho cuộc phiêu lưu với chúng
							tôi.
							<br />
							<br />
							<span className='text-destructive font-medium italic'>
								*** Lưu ý: Bạn nên xem xét kỹ lưỡng hành trình, ngày tham quan
								có sẵn và chi phí của mỗi người cho mỗi tour trước khi thanh
								toán. ***
							</span>
						</p>
					) : (
						<p className='text-pretty text-base'>
							When booking with us, we recommend paying using one of the
							following methods. You can either use the Pay ID 0401211890 or
							make a direct bank transfer to the ANZ bank account with the
							following details:
							<br /> - Account name: LE T T
							<br /> - BSB: 012430
							<br /> - Account number: 428651728
							<br />
							<br /> Alternatively, you can make a payment to Ann's account in
							Vietnam with the following details:
							<br /> - Account name: LE THI THUY
							<br /> - Account number: 21908222
							<br /> - MB bank
							<br />
							<br /> After making your payment, please use the payment reference
							to fill out the booking form below. Upon receiving your payment
							and the number of people joining the tour, we will send a
							confirmation email or message to notify you that your tour booking
							is successful and ready for your adventure.
							<br />
							<br />
							<span className='text-destructive font-medium italic'>
								*** Note that: You should carefully review the itinerary, the
								available tour dates, and the cost per person for each tour
								before making a text-destructive payment. ***
							</span>
						</p>
					)}
				</div>
			</CardHeader>
			<CardContent className='flex w-full items-center justify-center gap-5'>
				<FormBookingDetail />
				<div className='bg-background/80 relative hidden size-full overflow-hidden rounded-[0.4rem] p-1 backdrop-blur-md md:block'>
					<Image
						src='/Images/contact/form.webp'
						alt='Card'
						fill
						className='object-cover object-center'
					/>
				</div>
			</CardContent>
		</Card>
	);
}

export default BookingDetailCard;
