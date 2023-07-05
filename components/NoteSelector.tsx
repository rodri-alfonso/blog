import AvatarOrchester from '@assets/avatars'

export default function NoteSelector() {
	const MOCK = [
		{
			title: 'Note title mock',
			description: 'This is a great description of whats supouse to be this note',
			topic: 'css',
		},
		{
			title: 'Note title mock',
			description: 'This is a great description of whats supouse to be this note',
			topic: 'javascript',
		},
		{
			title: 'Note title mock',
			description: 'This is a great description of whats supouse to be this note',
			topic: 'news',
		},
		{
			title: 'Note title mock',
			description: 'This is a great description of whats supouse to be this note',
			topic: 'webdev',
		},
	]

	const avatarcMap = {
		css: 'glasses',
		javascript: 'cute',
		news: 'earpods',
		webdev: 'default',
	}

	return (
		// <section className='flex w-full h-72 overflow-hidden rounded-lg'>
		// 	<div className='w-full h-full relative bg-blue-200 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all'>
		// 		<img src='/avatar-torso.svg' className='w-44 absolute bottom-0 left-1' alt='' />
		// 	</div>
		// 	<div className='w-full h-full relative bg-blue-400 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all'>
		// 		<img src='/avatar-torso.svg' className='w-44 absolute bottom-0 left-1' alt='' />
		// 	</div>
		// 	<div className='w-full h-full relative bg-blue-600 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all'>
		// 		<img src='/avatar-torso.svg' className='w-44 absolute bottom-0 left-1' alt='' />
		// 	</div>
		// 	<div className='w-full h-full relative bg-blue-800 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all'>
		// 		<img src='/avatar-torso.svg' className='w-44 absolute bottom-0 left-1' alt='' />
		// 	</div>
		// </section>
		<section className='flex w-full h-72 overflow-hidden rounded-lg gap-4'>
			{MOCK.map((note) => (
				<div key={note.topic} className=''>
					<AvatarOrchester type={avatarcMap[note.topic]} size={50} />
				</div>
			))}
		</section>
	)
}
