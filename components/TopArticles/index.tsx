import Link from 'next/link'
import { Content } from '@content/types'
import Article from './Article'

interface Props {
	articles: Content[]
}

export default function TopArticles({ articles }: Props) {
	return (
		<section className='grid gap-8 pt-4 px-6'>
			<div className='grid grid-cols-2 gap-x-12 gap-y-14'>
				{articles.map((article) => (
					<Article
						date={article.date}
						href={`/articles/${article.slug}`}
						title={article.title}
						key={article.slug}
						description={article.description}
						illustration={article.illustration}
						readingTime={article.readingTime}
						hightlight={article.highlight}
					/>
				))}
			</div>
			<Link
				href='/articles'
				className='font-medium flex gap-1 hover:gap-2.5 hover:underline items-center transition-all lowercase w-40 py-2 active:scale-95'
			>
				<p className=''>View all articles</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>
		</section>
	)
}
