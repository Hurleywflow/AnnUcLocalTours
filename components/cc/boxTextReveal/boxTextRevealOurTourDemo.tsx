/* eslint-disable @typescript-eslint/require-await */
import BoxReveal from "./BoxTextReveal";

function BoxRevealOurTourDemo() {
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor='#9ed6f9b6' duration={0.9}>
				<h3 className='shadow-foreground-400 text-balance text-center text-xl text-foreground text-shadow-lg md:text-2xl'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
					inventore. Eius accusantium et nobis exercitationem facere voluptates
					corporis? Excepturi natus officiis quod cum animi quas, fugiat
					corrupti sunt ratione quam! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Recusandae, perferendis! Laboriosam harum recusandae
					blanditiis consequuntur id sunt, ipsum, architecto quae inventore
					dolor officia nobis sint illo repellat officiis, accusamus iure. Lorem
				</h3>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealOurTourDemo;
