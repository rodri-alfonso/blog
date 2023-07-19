import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import styles from '@styles/content.module.css'

interface Props {
	content: any
	components?: Object
	className?: string
}

export default function MDXContent({ components = {}, content, className }: Props) {
	return (
		<div className={`${styles.content} ${className}`}>
			<MDXRemote components={{ CH, ...components }} {...content} />
		</div>
	)
}
