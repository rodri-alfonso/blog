import ArticleDate from '@components/ArticleDate'

interface Props {
	title: string
	description: string
	date: string
	href: string
	illustration: string
	readingTime: number
	hightlight: boolean
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
				<ArticleDate date={new Date(props.date)} time={props.readingTime} />
			</div>
			<p>{props.description}</p>
		</a>
	)
}
