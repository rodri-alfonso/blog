/*
- title
- heading
- subheading
- subtitle
- paragraph
- support
- Serif
*/

type Color = 'gray' | 'contrast' | 'default' | 'white-gray' | 'dark-gray'
type Variant = 'medium' | 'bold' | 'normal'

export interface Typography {
	text: string
	variant?: Variant
	color?: Color
	className?: string
}

export const TYPOGRAPHY_COLOR_MAP = {
	'white-gray': 'text-gray-200',
	'dark-gray': 'text-gray-700',
	gray: 'text-gray-500',
	contrast: 'text-white',
	default: 'text-gray-900',
}
