import Link from 'next/link'
import { Content } from '@content/types'
import Article from './Article'

interface Props {
	articles: Content[]
}

export default function TopArticles({ articles }: Props) {
	return (
		<section className='grid gap-4'>
			<div className='grid gap-4 hover:text-gray-100'>
				{articles.map((article, index) => (
					<Article
						date={article.date}
						href={`/articles/${article.slug}`}
						title={article.title}
						key={article.slug}
						description={article.description}
						readingTime={article.readingTime}
						hightlight={article.highlight}
						index={index}
					/>
				))}
			</div>

			<Link
				href='/articles'
				className='font-medium flex gap-1 justify-center hover:gap-2.5 items-center transition-all w-44 rounded-xl hover:bg-gray-100 py-2 active:scale-95'
			>
				<p className=''>View all articles</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>
		</section>
	)
}
