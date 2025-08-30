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
			colors: {
				'space-black': 'hsl(var(--color-space-black))',
				'deep-space': 'hsl(var(--color-deep-space))',
				'cyber-green': 'hsl(var(--color-cyber-green))',
				'neon-green': 'hsl(var(--color-neon-green))',
				'electric-blue': 'hsl(var(--color-electric-blue))',
				'metallic-gray': 'hsl(var(--color-metallic-gray))',
				'dark-panel': 'hsl(var(--color-dark-panel))',
				'glow-green': 'hsl(var(--color-glow-green))',
				background: 'hsl(var(--color-background))',
				foreground: 'hsl(var(--color-foreground))',
				primary: {
					DEFAULT: 'hsl(var(--color-primary))',
					foreground: 'hsl(var(--color-primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary))',
					foreground: 'hsl(var(--color-secondary-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--color-accent))',
					foreground: 'hsl(var(--color-accent-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--color-muted))',
					foreground: 'hsl(var(--color-muted-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--color-destructive))',
					foreground: 'hsl(var(--color-destructive-foreground))',
				},
				border: 'hsl(var(--color-border))',
				input: 'hsl(var(--color-input))',
				ring: 'hsl(var(--color-ring))',
				card: {
					DEFAULT: 'hsl(var(--color-card))',
					foreground: 'hsl(var(--color-card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--color-popover))',
					foreground: 'hsl(var(--color-popover-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'circulate': 'circulate 2s linear infinite',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'neon-pulse': {
					'0%, 100%': {
						textShadow: '0 0 5px hsl(var(--color-cyber-green) / 0.8), 0 0 10px hsl(var(--color-cyber-green) / 0.6), 0 0 15px hsl(var(--color-cyber-green) / 0.4)',
					},
					'50%': {
						textShadow: '0 0 10px hsl(var(--color-cyber-green)), 0 0 20px hsl(var(--color-cyber-green) / 0.8), 0 0 30px hsl(var(--color-cyber-green) / 0.6)',
					},
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--color-cyber-green) / 0.4)',
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--color-cyber-green) / 0.8)',
					},
				},
				'circulate': {
					'0%': { clipPath: 'inset(90% 0 0 0)' },
					'25%': { clipPath: 'inset(0 90% 0 0)' },
					'50%': { clipPath: 'inset(0 0 90% 0)' },
					'75%': { clipPath: 'inset(0 0 0 90%)' },
					'100%': { clipPath: 'inset(90% 0 0 0)' },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;