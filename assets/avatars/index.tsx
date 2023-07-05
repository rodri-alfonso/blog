import { lazy, Suspense } from 'react'

export type AvatarSizes = 50 | 126

interface Props {
	type: Avatar
	size?: AvatarSizes
}

type Avatar = 'default' | 'earpods' | 'cute' | 'glasses'

export default function AvatarOrchester({ type, size }: Props) {
	const IconComponent = lazy(() => import(`./${type}`))

	return (
		<Suspense>
			<IconComponent size={size} />
		</Suspense>
	)
}
