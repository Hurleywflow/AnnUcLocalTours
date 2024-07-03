import {
	Dancing_Script,
	Inter,
	Pinyon_Script,
	Poppins,
} from "next/font/google";

export const inter_init = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
export const pinyon_script_init = Pinyon_Script({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-pinyon_script",
	weight: ["400"],
});

export const poppins_init = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
});
export const dancing_Script_init = Dancing_Script({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dancing_script",
});

export const poppins = poppins_init.variable;
export const dancing_script = dancing_Script_init.variable;
export const inter = inter_init.variable;
export const pinyon_script = pinyon_script_init.variable;
