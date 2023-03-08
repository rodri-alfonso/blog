import { Options } from '$fresh/plugins/twind.ts'

export default {
	selfURL: import.meta.url,
	darkMode: 'class',

	theme: {
		colors: {
			gray: {
				50: '#E5E5E5',
				200: '#A3A3A3',
				300: '#737373',
				600: '#262626',
				800: '#161615',
				900: '#111010',
			},
			white: '#ffffff',
		},
	},
} as Options
