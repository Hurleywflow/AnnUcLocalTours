import { Container } from "@/components/cc/container/container";
import { CardBooking } from "@/components/cc/form/CardBooking";

function Booking() {
	return (
		<div>
			<Container>
				<div className='flex h-fit min-h-screen w-full flex-col items-center justify-center gap-20 overscroll-x-none'>
					<div className='size-full' id='#'>
						<CardBooking />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Booking;
