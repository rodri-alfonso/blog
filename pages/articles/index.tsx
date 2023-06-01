import Page from '@layouts/Page'
import { getPartialContent } from '../../utils/content'
import { PartialContent } from '@content/types'
import Link from 'next/link'
import Banner from '@components/Banner'

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
				className='py-2.5 px-4 rounded-md flex items-center justify-between hover:bg-gray-100 hover:text-gray-900 transition-all active:scale-[0.98]'
				href={`/articles/${article.slug}`}
			>
				<p className='font-medium first-letter:capitalize'>{article.title}</p>
				<span className='first-letter:capitalize text-sm font-medium'>{simplifyDate(new Date(article.date))}</span>
			</Link>
		)
	}

	return (
		<Page description='' title="Rodrigo's Blog | Articles">
			<Banner
				title='What I&#39;ve written'
				description={`${posts.length} Articles about UI architecture, design systems, and advanced CSS`}
			/>
			<section className='mt-8 grid text-gray-600 hover:text-gray-400'>
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
