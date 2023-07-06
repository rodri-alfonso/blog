import ArticleDate from '@components/ArticleDate'
import Link from 'next/link'

interface Props {
	title: string
	description: string
	date: string
	href: string
	illustration: string
	readingTime: number
	hightlight: boolean
	index: number
}

export default function Article(props: Props) {
	return (
		<Link
			href={props.href}
			className='grid gap-1 p-5 text-gray-900 transition-all active:scale-[0.97] hover:bg-gray-100 rounded-lg'
		>
			<div className='grid gap-1'>
				<h3 className='font-semibold first-letter:uppercase text-lg'>{props.title}</h3>
				<ArticleDate date={new Date(props.date)} time={props.readingTime} />
			</div>
			<p className='text-gray-500'>{props.description}</p>
		</Link>
	)
}
