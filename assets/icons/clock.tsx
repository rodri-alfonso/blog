import { IconProps } from '.'

export default function Clock({ className, size }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<circle cx='12' cy='12' r='9' />
			<polyline points='12 7 12 12 15 15' />
		</svg>
	)
}
