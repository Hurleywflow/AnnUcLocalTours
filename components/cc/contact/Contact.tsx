import { Card } from "@/components/ui/card";
import { CardBooking } from "../form/CardBooking";
import { SparklesTextContactDemo } from "../magicui/sparkles-text/SparklesTextContactDemo";
import { P } from "../text-utils/TextUtils";

function Contact() {
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-10'>
			<Card className='flex w-full flex-col items-center justify-center gap-10'>
				<SparklesTextContactDemo />
				<P className='text-center'>
					If you have any questions, please do not hesitate to contact us. We
					are here to help and ensure you have the best experience possible.
				</P>
				<CardBooking />
				<div className='mb-4 flex w-full items-center justify-center'>
					<hr className='w-full flex-1 border-t border-border' />
					<span className='px-2 text-sm'>OR CONTINUE WITH</span>
					<hr className='w-full flex-1 border-t border-border' />
				</div>
			</Card>
		</div>
	);
}

export default Contact;
