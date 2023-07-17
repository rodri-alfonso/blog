import AvatarOrchester from '@assets/avatars'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import styles from '@styles/content.module.css'

const TYPE_MAP = {
	news: 'News 🗞️',
	nerd: 'Nerding out 🤓',
	tip: 'Tip 💡',
}

type Type = keyof typeof TYPE_MAP

interface Props {
	title: string
	description: string
	topic: 'css' | 'javascript' | 'news' | 'webdev'
	type: Type
	content: any
}

export default function NoteContent({ description, topic, type, content }: Props) {
	const topicMap = {
		css: "Rodri's CSS",
		javascript: "Rodri's JavaScript",
		news: 'News',
		webdev: 'Web Mastering',
	}
	const avatarcMap = {
		css: 'glasses',
		javascript: 'cute',
		news: 'earpods',
		webdev: 'default',
	}
	const avatarType = avatarcMap[topic || 'webdev'] as any

	return (
		<article className='flex gap-4 hover:bg-gray-100 rounded-xl p-6'>
			<AvatarOrchester type={avatarType} size={50} />
			<div className='grid gap-0.5'>
				<div className='flex justify-between items-center gap-2'>
					<h2 className='text-lg font-medium -mb-1'>{topicMap[topic]}</h2>
					<span className='bg-gray-200 font-semibold text-sm rounded-full px-2.5 py-1'>{TYPE_MAP[type]}</span>
				</div>
				<p className='text-gray-500'>{description}</p>
				<article className={`pt-4 ${styles.content} prose`}>
					<MDXRemote components={{ CH }} {...content} />
				</article>
			</div>
		</article>
	)
}
