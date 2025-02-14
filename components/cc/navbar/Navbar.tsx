"use client";
import LineTabs from "@/components/cc/navbar/AnimationTab";
// import dynamic from 'next/dynamic';
// const ThemeSwitcher= dynamic(
// 	async () => import("@/components/cc/theme-switcher/theme-switcher"),
// 	{ ssr: true },
// );
import { Button } from "@/components/ui/button";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Inputsize } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Images from "next/image";
// import { CircleUser, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

function Navbar(): JSX.Element {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<header className='sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/70 px-4 backdrop-blur-xl   md:px-6'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				{/* Navbar items */}
				<Link
					href={pathname.includes("/vi") ? "/vi" : "/en"}
					className='mr-10 flex items-center gap-2 text-lg font-semibold md:text-base'
				>
					{/* <Package2 className='size-6' /> */}
					<div className='relative size-10 overflow-hidden rounded-full'>
						<Images src='/logo.png' alt='AnnUcLocalTours' className='' fill />
					</div>
					<span className='sr-only'>AnnUcLocalTours</span>
				</Link>
				{/* Menu items */}
				<LineTabs />
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
						<Menu className='size-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<nav className='grid gap-6 text-lg font-medium'>
						<Link
							href={pathname.includes("/vi") ? "/vi" : "/en"}
							className='flex items-center gap-2 text-lg font-semibold'
						>
							<div className='relative size-10 overflow-hidden rounded-full'>
								<Images
									src='/logo.png'
									alt='AnnUcLocalTours'
									className=''
									fill
								/>
							</div>
							<span className='sr-only'>AnnUcLocalTours</span>
						</Link>
						<Link href='/#home' className='hover:text-foreground'>
							{pathname.includes("/vi") ? "Trang chủ" : "Home"}
						</Link>
						<Link
							href='/#intro'
							className='text-muted-foreground hover:text-foreground'
						>
							{pathname.includes("/vi") ? "Giới thiệu" : "Intro"}
						</Link>
						<Link
							href='/#blogs'
							className='text-muted-foreground hover:text-foreground'
						>
							{pathname.includes("/vi") ? "Tours Nổi  Bật" : "Feature Tours"}
						</Link>
						<Link
							href='/#our-tours'
							className='text-muted-foreground hover:text-foreground'
						>
							{pathname.includes("/vi")
								? "Tours Thường Xuyên"
								: "Regular Tours"}
						</Link>

						<Link
							href='/#feedback'
							className='text-muted-foreground hover:text-foreground'
						>
							{pathname.includes("/vi") ? "Phản hồi" : "Feedback"}
						</Link>
						<Link
							href='/#contact'
							className='text-muted-foreground hover:text-foreground'
						>
							{pathname.includes("/vi") ? "Liên hệ" : "Contact"}
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
				{/* <Button className='group relative ml-auto flex-1 overflow-hidden rounded-md px-6  transition  sm:flex-initial '>
					<Link href='tel:+61401211890'>
						<span className='relative text-base uppercase'>
							{pathname.includes("/vi") ? "Gọi Điện" : "call now"}
						</span>
						<div className='absolute inset-0 top-[-20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-md'>
							<div className='relative h-full w-10 bg-background/30' />
						</div>
					</Link>
				</Button> */}
				{/* this is theme switcher */}
				<div className='group relative ml-auto flex-initial rounded-md transition'>
					<ThemeSwitcher />
					<div className='absolute inset-0 top-[-20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-md'>
						<div className='relative h-full w-10 bg-background/30' />
					</div>
				</div>

				{/* this is language switcher */}
				<Button
					onClick={() => {
						router.push(pathname.includes("/vi") ? "/en" : "/vi");
					}}
					variant='secondary'
					aria-label='Toggle language'
					type='button'
					size='default'
					className='text-base'
				>
					{pathname.includes("/vi") ? "🇦🇺 En" : "🇻🇳 VN"}
				</Button>
				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='secondary' size='icon' className='rounded-full'>
							<CircleUser className='size-5' />
							<span className='sr-only'>Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu> */}
			</div>
		</header>
	);
}

export default Navbar;
