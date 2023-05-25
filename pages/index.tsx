import { Playfair_Display } from 'next/font/google'
import Page from '@layouts/Page'
import { getPartialContent } from '../utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'

const inter = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Home({ posts }: any) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='Welcome to my dashboard!'
				description='I write about UI architecture, design systems, typographies, CSS, and web performance.'
			/>

			<div className='pt-12 grid gap-20'>
				<TopArticles articles={posts} />
				<TopArticles articles={posts} />
			</div>
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
