import Page from '@layouts/Page'
import { getPartialContent, getFullContent } from '../utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'
import Recomendator from '@components/Recomendator'
import TopNotes from '@components/TopNotes'

export default function Home({ artices, notes }: any) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='Welcome to my dashboard!'
				description='I write about UI architecture, design systems, typographies, CSS, and web performance.'
			/>

			<div className='grid gap-8'>
				<TopArticles articles={artices} />
				<Recomendator />
				<TopNotes notes={notes} />
			</div>
		</Page>
	)
}

export const getStaticProps = async () => {
	const artices = getPartialContent({ type: 'articles' })
	const notes = await getFullContent({ type: 'notes' })

	return {
		props: {
			artices,
			notes,
		},
	}
}
