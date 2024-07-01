import ShineBorder from "./ShineBorder";

export function ShineBorderBasicDemo() {
	return (
		<ShineBorder
			className='text-center text-2xl font-semibold capitalize md:text-4xl'
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
		>
			Our customers’ experiences with us.
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
