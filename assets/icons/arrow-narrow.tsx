import { IconProps } from './'

export default function ArrowNarrow({ className, size }: IconProps) {
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
			<line x1='5' y1='12' x2='19' y2='12' />
			<line x1='5' y1='12' x2='9' y2='16' />
			<line x1='5' y1='12' x2='9' y2='8' />
		</svg>
	)
}
