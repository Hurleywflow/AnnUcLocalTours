import ContactSocial from "../../contact-social/ContactSocial";
import ShineBorder from "./ShineBorder";

export function ShineBorderBasicDemo() {
	return (
		<ShineBorder
			className='bg-background text-center text-2xl font-medium capitalize md:text-4xl'
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
		>
			<ContactSocial />
		</ShineBorder>
	);
}

// export function ShineBorderDemo() {
// 	return (
// 		<ShineBorder
// 			className='text-center text-2xl font-bold capitalize'
// 			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
// 		>
// 			Shine Border
// 		</ShineBorder>
// 	);
// }
