import { H5 } from "@/components/cc/text-utils/TextUtils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogData } from "@/data/blogs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const Blog = ({ params }: { params: { id: string } }) => {
	const id = params.id;
	const blog = blogData.find((blog) => blog.id === String(id));
	// check if the blog exists
	if (!blog) {
		return notFound();
	}
	return (
		<div className='min-h-screen w-full py-20 lg:py-40'>
			<div className='container mx-auto flex flex-col gap-14'>
				<div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
					<Link href='/#blogs'>
						<Button className='group gap-4'>
							View all articles{" "}
							<MoveLeft className='size-4 transition-all duration-100 ease-linear hover:group-hover:-translate-x-3' />
						</Button>
					</Link>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex cursor-pointer flex-col gap-4 hover:opacity-75 md:col-span-2'>
						<div className='aspect-video rounded-md bg-muted' />
						<div className='flex flex-row items-center gap-4'>
							<Badge>News</Badge>
							<p className='flex flex-row items-center gap-2 text-sm'>
								<span className='text-muted-foreground'>By</span>{" "}
								<Avatar className='size-6'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>{blog.author}</span>
							</p>
						</div>
						<div className='flex flex-col gap-2'>
							<H5>{blog.title}</H5>
							<p className=' text-base text-muted-foreground'>
								{blog.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Blog;
