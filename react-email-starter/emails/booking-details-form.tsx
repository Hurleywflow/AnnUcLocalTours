import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type BookingDetailsFormProps = {
	username?: string;
	phone?: string;
	email?: string;
	numberOfAdults?: number;
	numberOfChildren?: number;
	typeOfTravel?: string;
	referencePayment?: string;
	dateTravel?: Date;
	otherRequest?: string;
};
const BookingDetailsForm = ({
	username,
	email,
	phone,
	numberOfAdults,
	numberOfChildren,
	typeOfTravel,
	referencePayment,
	dateTravel,
	otherRequest,
}: BookingDetailsFormProps) => {
	return (
		<Html>
			<Head />
			<Preview>Ann's Uc Local Tours</Preview>
			<Tailwind>
				<Body className='bg-stone-300 text-zinc-950'>
					<Container>
						<Section className='borderBlack my-10 rounded-md bg-stone-100 px-5 py-4 text-zinc-950 '>
							<Row>
								<Heading className='font-normal leading-tight'>
									New booking from Ann's Uc Local Tours.
								</Heading>
							</Row>
							<Hr />
							<Row>
								<Text>UserName: {username}</Text>
								<Text>PhoneNumber: {phone}</Text>
								<Text>Email: {email}</Text>
								<Text>Number of Adults: {numberOfAdults}</Text>
								<Text>Number of Children: {numberOfChildren}</Text>
								<Text>Type of Travel: {typeOfTravel}</Text>
								<Text>Reference Payment: {referencePayment}</Text>
								<Text>
									Travel Date:{" "}
									{dateTravel ? dateTravel.toString().slice(0, 10) : ""}
								</Text>
								<Text>Other Request: {otherRequest}</Text>
							</Row>
							<Hr />
							<Text>The sender's email is: {email}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
export default BookingDetailsForm;
