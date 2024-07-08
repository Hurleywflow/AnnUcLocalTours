import AvatarCircles from "./AvatarCircles";

const avatarUrls = [
	"/Images/Testimonials/t1.png",
	"/Images/Testimonials/t2.png",
	"/Images/Testimonials/t3.png",
	"/Images/Testimonials/t4.png",
	"/Images/Testimonials/t5.png",
];

export default async function AvatarCirclesDemo() {
	return <AvatarCircles numPeople={19} avatarUrls={avatarUrls} />;
}
