import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					}
				},
				'float-reverse': {
					'0%, 100%': {
						transform: 'translateY(-5px)'
					},
					'50%': {
						transform: 'translateY(5px)'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'spin-slow': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				},
				'slide-right': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100vw)'
					}
				},
				'slide-left': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100vw)'
					}
				},
				'wave': {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(20deg)'
					},
					'75%': {
						transform: 'rotate(-20deg)'
					}
				},
				'progress-95': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '95%'
					}
				},
				'progress-88': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '88%'
					}
				},
				'typewriter': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '100%'
					}
				},
				'blink': {
					'0%, 50%': {
						'border-color': 'transparent'
					},
					'51%, 100%': {
						'border-color': 'currentColor'
					}
				},
				'draw-line': {
					'0%': {
						'stroke-dasharray': '1000',
						'stroke-dashoffset': '1000'
					},
					'100%': {
						'stroke-dasharray': '1000',
						'stroke-dashoffset': '0'
					}
				},
				'tech-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-out': 'fade-out 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'float-delayed': 'float-delayed 4s ease-in-out infinite 1s',
				'float-reverse': 'float-reverse 3.5s ease-in-out infinite 0.5s',
				'gradient-x': 'gradient-x 3s ease infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'slide-right': 'slide-right 8s linear infinite',
				'slide-left': 'slide-left 10s linear infinite',
				'wave': 'wave 1s ease-in-out infinite',
				'progress-95': 'progress-95 2s ease-out forwards',
				'progress-88': 'progress-88 2s ease-out forwards 0.3s',
				'typewriter': 'typewriter 3s steps(40, end) forwards',
				'blink': 'blink 1s infinite',
				'draw-line': 'draw-line 2s ease-in-out forwards',
				'tech-float': 'tech-float 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
