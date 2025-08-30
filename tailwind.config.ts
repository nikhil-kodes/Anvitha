import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'exo': ['Exo 2', 'sans-serif'],
			},
		},
	},
} satisfies Config;