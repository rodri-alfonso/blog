import { lazy, Suspense } from 'react'

export type IconProps = {
	size?: 24 | 14 | 32 | 18 | 22
	className?: string
}

interface Props extends IconProps {
	icon: Icon
}

type Icon = 'calendar' | 'arrow-narrow' | 'clock' | 'chevron-left' | 'book' | 'external-link'

export default function IconOrchester({ icon, className, size = 24 }: Props) {
	const IconComponent = lazy(() => import(`./${icon}`))

	return (
		<Suspense>
			<IconComponent className={className} size={size} />
		</Suspense>
	)
}
