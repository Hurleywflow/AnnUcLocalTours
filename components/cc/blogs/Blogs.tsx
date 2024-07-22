"use client";
import { Container } from "@/components/cc/container/container";
import { H5 } from "@/components/cc/text-utils/TextUtils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogData } from "@/data/blogs";
import { MotionDiv } from "@/lib/framer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesTextBlogslDemo } from "../magicui/sparkles-text/SparklesTextBlogslDemo";

const Blogs = () => {
	const pathname = usePathname();
	// Check if the pathname includes "/vi" or "/en"
	const isEn = pathname.includes("/en");

	// Determine the locale based on the pathname
	let locale = "vi";
	if (isEn) {
		// Default locale
		locale = "en";
	}

	// go through blogData and remove the last one
	const blogDataSlice = blogData.slice(0, blogData.length - 1);

	return (
		<Container>
			<Card className='flex flex-col items-center justify-center gap-10 p-2'>
				<SparklesTextBlogslDemo />
				<div className=' h-fit w-full'>
					<div className=' mx-auto flex flex-col gap-10'>
						<div className='grid h-fit grid-cols-2 gap-1 space-y-5 md:grid-cols-3 md:gap-2 lg:grid-cols-4'>
							{/* render the first log posts */}
							<div className='col-span-2 flex cursor-pointer flex-col gap-4  md:col-span-3 lg:col-span-4'>
								<Link
									href={`/${locale}/blogs/${blogData[blogData.length - 1].id}`}
									key={blogData[blogData.length - 1].id}
								>
									<div className='relative aspect-video overflow-hidden  rounded-md bg-muted'>
										<Image
											src={
												blogData[blogData.length - 1].imageUrl[
													blogData.length - 1
												]
											}
											alt={blogData[blogData.length - 1].title}
											fill
											className='object-cover object-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-linear'
											sizes='(max-width: 420px) 420px, (max-width: 640px) 640px, (max-width: 768px) 720px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px'
										/>
									</div>
									<div className='mt-2 flex flex-row items-center gap-4'>
										<Badge>New</Badge>
										<p className='flex flex-row items-center gap-2 text-sm'>
											<span className='text-muted-foreground'>By</span>{" "}
											<Avatar className='size-6'>
												<AvatarImage src='/logo.png' />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
											<span>{blogData[blogData.length - 1].author}</span>
										</p>
									</div>
									<div className='flex flex-col gap-2'>
										<H5 className='text-start'>
											{blogData[blogData.length - 1].title}
										</H5>
										<p className=' truncate text-base text-muted-foreground'>
											{blogData[blogData.length - 1].description}
										</p>
									</div>
								</Link>
							</div>
							{/* render the rest of the posts */}
							{blogDataSlice.map((blog) => (
								<Link href={`/${locale}/blogs/${blog.id}`} key={blog.id}>
									<MotionDiv
										className='col-span-1 flex cursor-pointer flex-col gap-2 hover:opacity-75 '
										key={blog.id}
										initial={{ opacity: 0.5, y: 40, scale: 0.9 }}
										whileInView={{ opacity: 1, y: 0, scale: 1 }}
										transition={{
											// delay: 0.2,
											duration: 0.3,
											ease: "linear",
										}}
									>
										<div className='relative aspect-square w-full overflow-hidden rounded-md bg-muted md:aspect-video'>
											<Image
												src={blog.imageUrl[0]}
												alt={blog.title}
												fill
												className='object-cover object-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-linear'
												sizes='(max-width: 420px) 420px, (max-width: 640px) 640px, (max-width: 768px) 720px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px'
											/>
										</div>
										<div className='flex flex-row items-center gap-4'>
											<Badge>New</Badge>
											<p className='flex flex-row items-center gap-2 text-sm'>
												<span className='text-muted-foreground'>By</span>{" "}
												<Avatar className='size-6'>
													<AvatarImage src='/logo.png' />
													<AvatarFallback>CN</AvatarFallback>
												</Avatar>
												<span>{blog.author}</span>
											</p>
										</div>
										<div className='flex flex-col gap-2'>
											<H5 className='text-start'>{blog.title}</H5>
											<p className='line-clamp-3 text-base text-muted-foreground'>
												{blog.description}
											</p>
										</div>
									</MotionDiv>
								</Link>
							))}
						</div>
					</div>
				</div>
			</Card>
		</Container>
	);
};
export default Blogs;
