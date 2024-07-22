/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getErrorMessage } from "@/lib/type-helper";
import logger from "@/lib/winston";
import ContactForm from "@/react-email-starter/emails/booking-form";
import { NextResponse } from "next/server";
import { Resend } from "resend";

if (
	!process.env.RESEND_API_KEY ||
	typeof process.env.RESEND_API_KEY !== "string"
) {
	throw new Error("RESEND_API_KEY must be defined and is a string");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<NextResponse> {
	// destructuring the request body into variables
	const { username, email, phone, numberOfPeople, dateTravel, otherRequest } =
		await request.json();

	try {
		await resend.emails.send({
			from: "AnnsUcLocalTours <onboarding@resend.dev>",
			to: ["hurleywflow@gmail.com"],
			// to: ["anthuy.yellowpages@gmail.com"],
			subject: "New booking from AnnsUcLocalTours!",
			reply_to: email,
			// send data to react email (booking-form) component to render
			react: ContactForm({
				username,
				phone,
				email,
				numberOfPeople,
				dateTravel,
				otherRequest,
			}),
		});

		return NextResponse.json(
			{
				status: "Ok",
			},
			{
				status: 200,
			},
		);
	} catch (e: unknown) {
		if (e instanceof Error) {
			// Inside your catch block
			logger.error(`Failed to send email: ${e.message}`);
		}
		return NextResponse.json(
			{
				error: getErrorMessage(e),
			},
			{
				status: 500,
			},
		);
	}
}
