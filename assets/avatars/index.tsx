import { lazy, Suspense } from 'react'

export type AvatarSizes = 50 | 126
export type Avatar = 'default' | 'earpods' | 'cute' | 'glasses'

interface Props {
	type: Avatar
	size?: AvatarSizes
}

export default function AvatarOrchester({ type, size }: Props) {
	const IconComponent = lazy(() => import(`./${type}`))

	return (
		<Suspense>
			<IconComponent size={size} />
		</Suspense>
	)
}
