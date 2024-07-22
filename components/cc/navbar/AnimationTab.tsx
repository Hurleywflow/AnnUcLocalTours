"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const tabs = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "Intro",
		link: "/#intro",
	},
	{
		text: "Feature Tours",
		link: "/#blogs",
	},
	{
		text: "Regular Tours",
		link: "/#our-tours",
	},
	{
		text: "Feedback",
		link: "/#feedback",
	},
	{
		text: "Contact",
		link: "/#contact",
	},
];
const tabsVi = [
	{
		text: "Trang chủ",
		link: "/",
	},
	{
		text: "Giới thiệu",
		link: "/#intro",
	},
	{
		text: "Tours Nổi  Bật",
		link: "/#blogs",
	},
	{
		text: "Tours Thường Xuyên",
		link: "/#our-tours",
	},
	{
		text: "Phản Hồi",
		link: "/#feedback",
	},
	{
		text: "Liên Hệ",
		link: "/#contact",
	},
];
// const tabs = ["Home", "Docs", "Components", "Hooks"];

type TabProps = {
	text: string;
	selected: boolean;
	setSelected: (text: string) => void;
	customID?: string;
};

export const Tab = ({
	text,
	selected,
	setSelected,
	customID,
}: TabProps): JSX.Element => {
	return (
		<Button
			onClick={() => {
				setSelected(text);
			}}
			// variant='secondary'
			variant={selected ? "secondary" : "ghost"}
			className={` ${
				selected ? "text-background" : " hover:text-muted-foreground"
			} relative ml-5 rounded-md px-2 py-1 text-base font-medium text-foreground transition-colors duration-300 focus-within:outline-red-500/50`}
		>
			<span className='relative z-10'>{text}</span>
			{selected && (
				<motion.div
					className='absolute left-0 top-0 flex size-full items-end justify-center'
					// biome-ignore lint/style/useTemplate: <explanation>
					layoutId={customID + "linetab"}
					transition={{ type: "spring", duration: 0.7, bounce: 0.6, delay: 0 }}
				>
					<span className='z-0 h-[3px] w-4/5 rounded-t-full bg-gradient-to-br from-primary to-secondary' />
				</motion.div>
			)}
		</Button>
	);
};

type LineTabProps = {
	center?: boolean;
	customID?: string;
};

const LineTabs = ({ center, customID }: LineTabProps): JSX.Element => {
	const pathname = usePathname();
	const [selected, setSelected] = useState<string>(tabs[0].text);
	return (
		<div
			className={` ${
				center ? "justify-center " : ""
			} flex items-center gap-2 border-b border-border`}
		>
			{pathname.includes("vi")
				? tabsVi.map((tab) => (
						<Link href={tab.link} key={tab.text}>
							<Tab
								text={tab.text}
								selected={selected === tab.text}
								setSelected={setSelected}
								// key={tab.text}
								customID={customID}
							/>
						</Link>
					))
				: tabs.map((tab) => (
						<Link href={tab.link} key={tab.text}>
							<Tab
								text={tab.text}
								selected={selected === tab.text}
								setSelected={setSelected}
								// key={tab.text}
								customID={customID}
							/>
						</Link>
					))}
		</div>
	);
};

export default LineTabs;
