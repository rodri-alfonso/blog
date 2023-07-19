import Page from '@layouts/Page'
import { getPartialContent } from '@utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'
import Recomendator from '@components/Recomendator'
import { Content } from '@content/types'

interface Props {
	articles: Content[]
}

export default function Home({ articles }: Props) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='Welcome to my dashboard!'
				description='I write about UI architecture, design systems, typographies, CSS, and web performance.'
			/>

			<div className='grid gap-8'>
				<TopArticles articles={articles} />
				<Recomendator />
			</div>
		</Page>
	)
}

export const getStaticProps = async () => {
	const articles = getPartialContent({ type: 'articles' })

	return {
		props: {
			articles,
		},
	}
}
