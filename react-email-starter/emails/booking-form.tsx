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
type ContactFormProps = {
	username?: string;
	phone?: string;
	email?: string;
	numberOfPeople?: number;
	dateTravel?: Date;
	otherRequest?: string;
};
const ContactForm = ({
	username,
	email,
	phone,
	numberOfPeople,
	dateTravel,
	otherRequest,
}: ContactFormProps) => {
	return (
		<Html>
			<Head />
			<Preview>Ann's Uc Local Tours</Preview>
			<Tailwind>
				<Body className='bg-sky-100 text-black'>
					<Container>
						<Section className='borderBlack my-10 rounded-md bg-sky-200 px-10 py-4 text-zinc-950'>
							<Row>
								<Heading className='leading-tight'>
									New booking from Ann's Uc Local Tours.
								</Heading>
							</Row>
							<Hr />
							<Row>
								<Text>UserName: {username}</Text>
								<Text>PhoneNumber: {phone}</Text>
								<Text>Email: {email}</Text>
								<Text>Number of People: {numberOfPeople}</Text>
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
export default ContactForm;
