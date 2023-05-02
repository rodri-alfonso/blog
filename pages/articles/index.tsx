import Page from '@layouts/Page'
import { getPartialContent } from '../../utils/content'
import { PartialContent } from '@content/types'
import Link from 'next/link'

interface Props {
	posts: PartialContent[]
}

function simplifyDate(date: Date) {
	return date
		.toLocaleString('es', {
			month: 'long',
			year: 'numeric',
		})
		.replace(' de', ',')
}

export default function Articles({ posts }: Props) {
	const Article = ({ article }: { article: PartialContent }) => {
		return (
			<Link
				className='py-2.5 px-4 rounded-md flex items-center justify-between text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-50 active:text-gray-400 transition-all relative'
				href={`/articles/${article.slug}`}
			>
				<p>{article.title}</p>
				<span>{simplifyDate(new Date(article.date))}</span>
			</Link>
		)
	}

	return (
		<Page description='' title="Rodrigo's Blog | Articles">
			<h2
				title='All articles'
				className='px-4'
			>{`${posts.length} Articles about UI architecture, design systems, and advanced CSS`}</h2>

			<section className='pt-8 grid'>
				{posts.map((article: PartialContent) => (
					<Article key={article.slug} article={article} />
				))}
			</section>
		</Page>
	)
}

export const getStaticProps = () => {
	const posts = getPartialContent({ type: 'articles' })

	return {
		props: {
			posts,
		},
	}
}
