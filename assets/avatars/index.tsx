import { lazy, Suspense } from 'react'

interface Props {
	type: Avatar
}

type Avatar = 'default' | 'glasses' | 'earphones' | 'classic'

export default function AvatarOrchester({ type }: Props) {
	const IconComponent = lazy(() => import(`./${type}`))

	return (
		<Suspense>
			<IconComponent />
		</Suspense>
	)
}
