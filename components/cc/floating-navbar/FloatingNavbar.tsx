/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
"use client";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { useState } from "react";
import { ShineBorderBasicDemo } from "../magicui/shine-border/ShineBorderBasicDemo";

const FloatingNav = ({
	className,
}: {
	className?: string;
}) => {
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			const direction = current! - scrollYProgress.getPrevious()!;
			// change to 0.08 to show up on screen
			if (scrollYProgress.get() < 0.22) {
				// if (scrollYProgress.get() < 0.05) {
				setVisible(false);
			} else if (direction < 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}
	});

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{
					opacity: 0,
					// opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"flex max-w-fit fixed bottom-10 md:bottom-5 inset-x-0 mx-auto z-20",
					className,
				)}
				// className={cn(
				// 	"flex max-w-fit  fixed bottom-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
				// 	className,
				// )}
			>
				{/* {navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
idx}`}
						href={navItem.link}
						className={cn(
							"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
						)}
					>
						<span className='block sm:hidden'>{navItem.icon}</span>
						<span className='hidden sm:block text-sm'>{navItem.name}</span>
					</Link>
				))}
				<button className='border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'>
					<span>Login</span>
					<span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
				</button> */}
				<CardContent className='flex items-center justify-center'>
					<ShineBorderBasicDemo />
				</CardContent>
			</motion.div>
		</AnimatePresence>
	);
};

export default FloatingNav;

export const FloatingNav1 = ({
	className,
}: {
	className?: string;
}) => {
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			const direction = current! - scrollYProgress.getPrevious()!;
			// change to 0.08 to show up on screen
			// if (scrollYProgress.get() < 0.2) {
			if (scrollYProgress.get() < 0.05) {
				setVisible(false);
			} else if (direction < 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}
	});

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{
					opacity: 0,
					// opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"flex max-w-fit fixed bottom-10 md:bottom-5 inset-x-0 mx-auto z-20",
					className,
				)}
				// className={cn(
				// 	"flex max-w-fit  fixed bottom-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
				// 	className,
				// )}
			>
				{/* {navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
idx}`}
						href={navItem.link}
						className={cn(
							"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
						)}
					>
						<span className='block sm:hidden'>{navItem.icon}</span>
						<span className='hidden sm:block text-sm'>{navItem.name}</span>
					</Link>
				))}
				<button className='border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'>
					<span>Login</span>
					<span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
				</button> */}
				<CardContent className='flex items-center justify-center'>
					<ShineBorderBasicDemo />
				</CardContent>
			</motion.div>
		</AnimatePresence>
	);
};
