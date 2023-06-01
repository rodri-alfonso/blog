interface Props {
	title: string
	description: string
	date: string
	href: string
	illustration: string
}

export default function Article(props: Props) {
	return (
		<a href={props.href} className='grid gap-4 rounded text-gray-900 transition-all active:scale-95 hover:underline'>
			<div className='w-full h-48 object-contain border-1 border-gray-50 shadow-lg rounded-lg overflow-hidden relative'>
				<img
					src={`/illustrations/${props.illustration}.png`}
					alt=''
					className='object-contain w-full h-full  hover:scale-125 hover:-rotate-12 transition-all'
				/>
			</div>

			<div className='grid gap-1'>
				<h3 className='font-semibold first-letter:uppercase text-lg'>{props.title}</h3>
				<div className='flex items-center gap-2.5'>
					<span className='text-sm text-gray-500 flex items-center gap-1'>
						<p className=''>{props.date}</p>
					</span>
					<span className='text-sm text-gray-500 flex items-center gap-1'>
						<img src={'/icons/clock.svg'} alt='' className='w-4 h-4 text-gray-500' />
						<p>9 min read</p>
					</span>
				</div>
			</div>
			<p>{props.description}</p>
		</a>
	)
}
