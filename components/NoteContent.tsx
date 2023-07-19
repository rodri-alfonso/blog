import MDXContent from './MDXContent'
import AvatarOrchester from '@assets/avatars'
import { FullContent, DataTopic } from '@content/types'
import { CONTENT_TYPE_MAP } from '@utils/config'
import { Avatar } from '@assets/avatars'

export default function NoteContent({ description, topic, type, content }: FullContent) {
	const topicMap = {
		css: "Rodri's CSS",
		javascript: "Rodri's JavaScript",
		news: 'News',
		webdev: 'Web Mastering',
	}
	const avatarcMap: Record<DataTopic, Avatar> = {
		css: 'glasses',
		javascript: 'cute',
		news: 'earpods',
		webdev: 'default',
	}

	return (
		<article className='flex gap-4 hover:bg-gray-100 rounded-xl p-6'>
			<AvatarOrchester type={avatarcMap[topic || 'webdev']} size={50} />
			<div className='grid gap-0.5'>
				<div className='flex justify-between items-center gap-2'>
					<h2 className='text-lg font-medium -mb-1'>{topicMap[topic]}</h2>
					<span className='bg-gray-200 font-semibold text-sm rounded-full px-2.5 py-1'>{CONTENT_TYPE_MAP[type]}</span>
				</div>
				<p className='text-gray-500'>{description}</p>
				<MDXContent content={content} className='pt-4 prose' />
			</div>
		</article>
	)
}
