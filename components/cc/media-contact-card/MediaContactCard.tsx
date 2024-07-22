import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'
import { ShineBorderBasicDemo } from '../magicui/shine-border/ShineBorderBasicDemo';



function MediaContactCard() {
  return (
			<Card className=' flex h-fit w-full flex-col items-center justify-center bg-background'>
				<CardHeader className='flex items-center justify-center'>
					<p className='text-pretty'>
						<span className='font-bold text-primary'>* </span>
						You can also reach out to us via email or through various platforms
						such as Facebook, SMS, Zalo, and WhatsApp for your convenience. Our
						team will get back to you as soon as possible.
					</p>
					<p className='text-pretty'>
						<span className='font-bold text-primary'>* </span> if you have any
						questions, please do not hesitate to contact us. We are here to help
						and ensure you have the best experience possible.
					</p>
				</CardHeader>
				<CardContent className='flex items-center justify-center'>
					<ShineBorderBasicDemo />
				</CardContent>
				<p className='text-balance text-center text-base font-medium'>
					<span className='font-bold text-primary'>* </span>
					<span className='font-bold text-primary'>* </span>
					<span className='font-bold text-primary'>* </span> Our trading hours
					are Monday to Sunday, 9:00 AM to 9:00 PM.{" "}
					<span className='font-bold text-primary'>* </span>
					<span className='font-bold text-primary'>* </span>
					<span className='font-bold text-primary'>* </span>
				</p>
			</Card>

		);
}

export default MediaContactCard
