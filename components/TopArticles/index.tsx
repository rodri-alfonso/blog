import Link from 'next/link'
import { Content } from '@/types'
import Article from './Article'

interface Props {
	articles: Content[]
}

export default function TopArticles({ articles }: Props) {
	return (
		<section className='grid gap-8'>
			<h2>Recommended articles</h2>
			<div className='grid grid-cols-3 gap-x-8 gap-y-14 pt-2'>
				{articles.map((article) => (
					<Article
						date={article.date}
						href={`/articles/${article.slug}`}
						title={article.title}
						key={article.slug}
						description={article.description}
						illustration={article.illustration}
					/>
				))}
			</div>
			<Link
				href='/articles'
				className='font-medium flex gap-1 hover:gap-2 hover:underline items-center transition-all lowercase w-40 py-2 active:scale-95'
			>
				<p>View all articles</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>
		</section>
	)
}
