import { Card } from "@/components/ui/card";
import type { TourType } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
type Props = {
	tours: TourType[];
};

function DestinationSections({ tours }: Props): JSX.Element {
	return (
		<Card className='grid grid-cols-2 lg:grid-cols-3 gap-1 w-full'>
			{tours.map((tour) => (
				<Link href={tour?.link || "/"} key={tour.id}>
					<Card className='flex flex-col w-full aspect-square md:aspect-video items-center justify-center gap-1 relative overflow-hidden shadow-lg'>
						<Image
							src={tour?.imageUrl || "Destination Image"}
							alt={tour?.title || " Destination title"}
							className='object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out'
							fill
							sizes='(max-width: 640px) 150px, (max-width: 768px) 220px, (max-width: 1024px) 320px, 320px'
						/>
						<div className='absolute bottom-0 inset-x-0 flex items-center justify-center bg-gradient-to-t from-background to-transparent'>
							<p className='text-center text-2xl font-semibold'>
								{tour?.title || " Destination title"}
							</p>
						</div>
					</Card>
				</Link>
			))}
		</Card>
	);
}

export default DestinationSections;
