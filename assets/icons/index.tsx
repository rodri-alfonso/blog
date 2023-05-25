import { lazy, Suspense } from 'react'

export type IconProps = {
	size?: 24 | 14 | 32
	className?: string
}

interface Props extends IconProps {
	icon: Icon
}

type Icon = 'calendar' | 'arrow-narrow' | 'clock'

export default function IconOrchester({ icon, className, size = 24 }: Props) {
	const IconComponent = lazy(() => import(`./${icon}`))

	return (
		<Suspense>
			<IconComponent className={className} size={size} />
		</Suspense>
	)
}
