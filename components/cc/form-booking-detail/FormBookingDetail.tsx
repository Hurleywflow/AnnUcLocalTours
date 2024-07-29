/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import confetti from "canvas-confetti";

const FormSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	// phone
	phone: z.string().min(10, {
		message: "Phone number must be at least 10 characters.",
	}),
	// email
	email: z.string().email({
		message: "Invalid email address",
	}),
	// number of adults, can be a string or a number
	numberOfAdults: z.preprocess(
		(val) => {
			if (typeof val === "string") return Number.parseInt(val);
			return val;
		},
		z.number().min(1, {
			message: "Number of adult must be at least 1",
		}),
	),
	// number of children, can be a string or a number
	numberOfChildren: z.string(),
	// payment reference
	referencePayment: z.string(),
	// type of travel, can be a string or a number
	typeOfTravel: z.string({
		required_error: "Please select an type of travel.",
	}),

	//  check date to travel at least after today
	dateTravel: z.date().min(new Date(), {
		message: "Date to travel must be after today",
	}),

	// other request
	otherRequest: z.string(),
});

export default function FormBookingDetail() {
	const pathname = usePathname();
	const [date, setDate] = useState<Date>();
	const { toast } = useToast();
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			phone: "",
			email: "",
			numberOfAdults: 1, // Changed from "" to 1
			numberOfChildren: "",
			typeOfTravel: "",
			referencePayment: "",
			dateTravel: new Date(),
			otherRequest: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log(data);

		try {
			const response = await fetch("/api/bookingDetail", {
				method: "POST",
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				toast({
					variant: "destructive",
					title: "Woops!",
					description: "Your message has not been sent.",
				});
			}
			if (response.status === 200) {
				// if response is ok, start confetti animation
				const end = Date.now() + 3 * 1000; // 3 seconds
				const colors = ["#a786ff", "#ff59a1", "#90ec84", "#2957ff"];
				// const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
				const frame = () => {
					if (Date.now() > end) return;
					void confetti({
						particleCount: 2,
						angle: 60,
						spread: 55,
						startVelocity: 60,
						origin: { x: 0, y: 0.5 },
						colors,
					});
					void confetti({
						particleCount: 2,
						angle: 120,
						spread: 55,
						startVelocity: 60,
						origin: { x: 1, y: 0.5 },
						colors,
					});
					requestAnimationFrame(frame);
				};
				frame();
				// reset to default value of the from, closed dialog or drawer and redirect to home page
				await new Promise((resolve) => {
					setTimeout(resolve, 0);
				});
				form.reset();
				router.push("/");
				toast({
					title: "Your booking has been submitted!",
					description: 'We will contact you soon.',
				});
				return data;
			}
		} catch (error) {
			if (error instanceof Error) {
				toast({
					variant: "destructive",
					title: "Woops!",
					description: "Your message has not been sent.",
				});
			}
			throw new Error("Error sending email");
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex w-full flex-col  justify-center space-y-6'
			>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi") ? "Tên" : "Username"}
							</FormLabel>
							<FormControl>
								<Input placeholder="Ann's Uc Local Tours" {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi") ? "Điện thoại" : "Phone"}
							</FormLabel>
							<FormControl>
								<Input placeholder='+61401211890' {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi") ? "Email" : "Email"}
							</FormLabel>
							<FormControl>
								<Input placeholder='anthuy.yellowpages@gmail.com' {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='numberOfAdults'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi")
									? "Số lượng người lớn"
									: "Number of Adults"}
							</FormLabel>
							<FormControl>
								<Input placeholder='1' {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='numberOfChildren'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi")
									? "Số lượng trẻ em"
									: "Number of children"}
							</FormLabel>
							<FormControl>
								<Input placeholder='0' {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='referencePayment'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi")
									? "Số tham chiếu thanh toán "
									: "Payment reference"}
							</FormLabel>
							<FormControl>
								<Input placeholder='0' {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='typeOfTravel'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi") ? "Loại tours" : "Type of tours"}
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue
											placeholder={
												pathname.includes("/vi")
													? "Chọn loại hình tham quan."
													: "Select a type of travel."
											}
										/>
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem
										value={pathname.includes("/vi") ? "Ghép" : "public"}
									>
										{pathname.includes("/vi") ? "Ghép" : "Public"}
									</SelectItem>
									<SelectItem
										value={pathname.includes("/vi") ? "Riêng" : "private"}
									>
										{pathname.includes("/vi") ? "Riêng" : "Private"}
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='dateTravel'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>
								{pathname.includes("/vi") ? "Ngày đi" : "Travel Date"}
							</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant='outline'
										className={cn(
											"w-[280x] justify-start text-left font-normal",
											!field.value && "text-muted-foreground",
										)}
									>
										{field.value ? (
											format(field.value, "PPP")
										) : (
											<span>Pick a date</span>
										)}
										<CalendarIcon className='ml-auto size-4 opacity-50' />
									</Button>
								</PopoverTrigger>
								<PopoverContent className='flex w-auto flex-col space-y-2 p-2'>
									<Select
										onValueChange={(value) => {
											setDate(addDays(new Date(), Number.parseInt(value)));
										}}
									>
										<SelectTrigger>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent position='popper'>
											<SelectItem value='0'>Today</SelectItem>
											<SelectItem value='1'>Tomorrow</SelectItem>
											<SelectItem value='3'>In 3 days</SelectItem>
											<SelectItem value='7'>In a week</SelectItem>
										</SelectContent>
									</Select>
									<div className='rounded-md border'>
										<Calendar
											mode='single'
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date < new Date() || date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</div>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='otherRequest'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{pathname.includes("/vi") ? "Yêu cầu khác" : "Other enquiry"}
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder={
										pathname.includes("/vi")
											? "Hãy cho chúng tôi biêt thêm về yêu cầu khác của bạn."
											: "Tell us a little bit about your enquiry."
									}
									className='resize-none'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='w-full self-center'>
					{pathname.includes("/vi") ? "Gửi" : "Submit"}
				</Button>
			</form>
		</Form>
	);
}
