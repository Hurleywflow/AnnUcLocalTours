import LineTabs from "@/components/cc/navbar/AnimationTab";
import ThemeSwitcher from "@/components/cc/theme-switcher/theme-switcher";
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

function Navbar(): JSX.Element {
	return (
		<header className='sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/70 px-4 backdrop-blur-xl   md:px-6'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				{/* Navbar items */}
				<Link
					href='/'
					className='mr-10 flex items-center gap-2 text-lg font-semibold md:text-base'
				>
					{/* <Package2 className='size-6' /> */}
					<div className='relative size-10 overflow-hidden rounded-full'>
						<Images
							src='/NetCode.svg'
							alt='AnnUcLocalTours'
							className=''
							fill
						/>
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
							href='/'
							className='flex items-center gap-2 text-lg font-semibold'
						>
							<div className='relative size-10 overflow-hidden rounded-full'>
								<Images
									src='/NetCode.svg'
									alt='AnnUcLocalTours'
									className=''
									fill
								/>
							</div>
							<span className='sr-only'>AnnUcLocalTours</span>
						</Link>
						<Link href='/#home' className='hover:text-foreground'>
							Home
						</Link>
						<Link
							href='/#intro'
							className='text-muted-foreground hover:text-foreground'
						>
							Intro
						</Link>
						<Link
							href='/#our-tours'
							className='text-muted-foreground hover:text-foreground'
						>
							Our Tours
						</Link>

						<Link
							href='/#feedback'
							className='text-muted-foreground hover:text-foreground'
						>
							Feedback
						</Link>
						<Link
							href='/#contact'
							className='text-muted-foreground hover:text-foreground'
						>
							Contact
						</Link>
						<Link
							href='/#blogs'
							className='text-muted-foreground hover:text-foreground'
						>
							Blogs
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
				<Button className='group relative ml-auto flex-1 overflow-hidden rounded-md px-6  transition  sm:flex-initial '>
					<Link href='tel:+610423099677'>
						<span className='relative text-base'>Book Now</span>
						<div className='absolute inset-0 top-[-20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-md'>
							<div className='relative h-full w-8 bg-accent' />
						</div>
					</Link>
				</Button>

				<ThemeSwitcher />
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
