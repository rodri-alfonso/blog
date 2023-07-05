import AvatarOrchester from '@assets/avatars'

interface Props {
	title: string
	description: string
	topic: 'css' | 'javascript' | 'news' | 'webdev'
}

export default function NoteContent({ title, description, topic }: Props) {
	const topicMap = {
		css: 'CSS Mastering',
		javascript: 'JavaScript Mastering',
		news: 'News',
		webdev: 'Web Mastering',
	}
	const avatarcMap = {
		css: 'glasses',
		javascript: 'cute',
		news: 'earpods',
		webdev: 'default',
	}

	return (
		<article className=' grid gap-6'>
			<div className='flex gap-4 items-center'>
				<AvatarOrchester type={avatarcMap[topic]} size={50} />
				<div className=''>
					<h2 className='text-lg font-medium -mb-1'>{topicMap[topic]}</h2>
					<p className='text-gray-500'>{description}</p>
				</div>
			</div>
			<div className='bg-gray-200 rounded-lg h-32' />
		</article>
	)
}
