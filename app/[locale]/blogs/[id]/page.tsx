"use client";
import { CarouselWithThumbnails } from "@/components/cc/carousel/SplideThumbnailsCarousel";
import { FloatingNav1 } from "@/components/cc/floating-navbar/FloatingNavbar";
import { H5 } from "@/components/cc/text-utils/TextUtils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogData, blogDataVi } from "@/data/blogs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

const Blog = ({ params }: { params: { id: string } }) => {
	const pathname = usePathname();
	// Check if the pathname includes "/vi" or "/en"
	const isEn = pathname.includes("/en");

	// Determine the locale based on the pathname
	let locale = "vi";
	if (isEn) {
		// Default locale
		locale = "en";
	}
	const id = params.id;
	const blog = blogData.find((blog) => blog.id === String(id));
	const blogVi = blogDataVi.find((blog) => blog.id === String(id));
	if (!blog) {
		// check if the blog exists
		return notFound();
	}
	if (!blogVi) {
		// check if the blog exists
		return notFound();
	}
	return (
		<div className='relative min-h-screen w-full py-10'>
			<FloatingNav1 />
			<div className='container mx-auto flex flex-col gap-14'>
				<div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
					<Link href={`/${locale}/#blogs`}>
						<Button className='group gap-4'>
							{pathname.includes("/vi") ? "Tất cả địa điểm" : "All Destination"}
							<MoveLeft className='size-4 transition-all duration-100 ease-linear hover:group-hover:-translate-x-3' />
						</Button>
					</Link>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex  flex-col gap-4  md:col-span-2'>
						{pathname.includes("/vi") ? (
							<CarouselWithThumbnails
								slides={Array.isArray(blogVi.imageUrl) ? blogVi.imageUrl : []}
							/>
						) : (
							<CarouselWithThumbnails
								slides={Array.isArray(blog.imageUrl) ? blog.imageUrl : []}
							/>
						)}

						<div className='flex flex-row items-center gap-4'>
							<Badge>⭐️⭐️⭐️⭐️⭐️</Badge>

							<p className='flex flex-row items-center gap-2 text-sm'>
								<span className='text-muted-foreground'>By</span>{" "}
								<Avatar className='size-6'>
									<AvatarImage src='/logo.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>{blog.author}</span>
							</p>
						</div>
						{pathname.includes("/vi")
							? /* render the date range */
								blogVi.dateRange &&
								blogVi.dateRange.length > 0 && (
									<Badge className='flex w-fit items-start justify-center text-center text-base'>
										{blogVi.dateRange}
									</Badge>
								)
							: /* render the date range */
								blog.dateRange &&
								blog.dateRange.length > 0 && (
									<Badge className='flex w-fit items-start justify-center text-center text-base'>
										{blog.dateRange}
									</Badge>
								)}
						{pathname.includes("/vi") ? (
							<div className='flex flex-col gap-2'>
								<H5 className='text-start'>{blogVi.title}</H5>
								<p className=' text-pretty text-base'>
									{blogVi.description.map((desc) => (
										<span key={desc}>
											{desc}
											<br />
											<br />
										</span>
									))}
								</p>
							</div>
						) : (
							<div className='flex flex-col gap-2'>
								<H5 className='text-start'>{blog.title}</H5>
								<p className=' text-pretty text-base'>
									{blog.description.map((desc) => (
										<span key={desc}>
											{desc}
											<br />
											<br />
										</span>
									))}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Blog;
