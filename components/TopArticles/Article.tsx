interface ITopArticle {
	title: string
	description: string
	date: string
	href: string
	illustration: string
}

export default function Article(props: ITopArticle) {
	return (
		<a
			href={props.href}
			className='grid gap-4 rounded text-gray-900 transition-all active:scale-95 hover:text-underline '
		>
			<div className='w-full h-48 object-contain border-1 border-gray-50 shadow-lg rounded-lg overflow-hidden relative'>
				<img
					src={props.illustration}
					alt=''
					className='h-64 m-auto absolute -top-8 left-0 right-0 object-cover hover:scale-125 hover:-rotate-12 transition-all'
				/>
			</div>

			<div className='grid gap-1'>
				<p>{props.title}</p>
				<div className='flex items-center gap-2.5'>
					<span className='text-sm text-gray-500 flex items-center gap-1'>
						<p>{props.date}</p>
					</span>
					<span className='text-sm text-gray-500 flex items-center gap-1'>
						<img src={'/icons/clock.svg'} alt='' className='w-4 h-4 text-gray-500' />9 min
					</span>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolore veniam ex unde possimus iste eius omnis
				aliquid.
			</p>
		</a>
	)
}
