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
import { toast } from "@/components/ui/use-toast";

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
	// number of people
	numberOfPeople: z.string().min(1, {
		message: "Number of people must be at least 1.",
	}),

	//  check date to travel at least after today
	dateTravel: z.date().min(new Date(), {
		message: "Date to travel must be after today",
	}),

	// other request
	otherRequest: z.string(),
});

export default function BookingForm() {
	const [date, setDate] = useState<Date>();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			dateTravel: new Date(),
			email: "",
			numberOfPeople: String(1),
			otherRequest: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
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
							<FormLabel>Username</FormLabel>
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
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder='+610423099677' {...field} />
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
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='ann@uc.com' {...field} />
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
					name='numberOfPeople'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Number of People</FormLabel>
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
					name='dateTravel'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Travel Date</FormLabel>
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
							<FormLabel>Other Request</FormLabel>
							<FormControl>
								<Textarea
									placeholder='Tell us a little bit about your request'
									className='resize-none'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='w-full self-center'>
					Submit
				</Button>
			</form>
		</Form>
	);
}
