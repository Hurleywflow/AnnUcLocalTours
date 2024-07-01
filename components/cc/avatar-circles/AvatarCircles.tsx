"use client";

import { cn } from "@/lib/utils";

type AvatarCirclesProps = {
	className?: string;
	numPeople?: number;
	avatarUrls: string[];
};

const AvatarCircles = ({
	numPeople,
	className,
	avatarUrls,
}: AvatarCirclesProps) => {
	return (
		<div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
			{avatarUrls.map((url, index) => (
				<img
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className='size-10 rounded-full border-2 border-white dark:border-gray-800'
					src={url}
					width={40}
					height={40}
					alt={`Avatar ${index + 1}`}
				/>
			))}
			<a
				className='flex size-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black'
				href='https://www.netcodedev.com'
			>
				+{numPeople}
			</a>
		</div>
	);
};

export default AvatarCircles;
