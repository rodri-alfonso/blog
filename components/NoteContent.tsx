interface Props {
	title: string
	description: string
	topic: 'css' | 'language' | ''
}

export default function NoteContent({ title, description, topic }: Props) {
	return (
		<article className=' grid gap-6'>
			<div className='flex gap-4 items-center'>
				<img src='/avatar.svg' alt='icon' className='w-10 h-10' />

				<div className=''>
					<h2 className='text-lg font-medium -mb-1'>{title}</h2>
					<p className='text-gray-500'>{description}</p>
				</div>
			</div>
			<div className='bg-gray-200 rounded-lg h-32' />
		</article>
	)
}
