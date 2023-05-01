import { Inter } from 'next/font/google'
import Link from 'next/link'
import Page from '@/components/layouts/Page'
import { getPartialContent } from '@/utils/content'
import TopArticles from '@/components/TopArticles'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: any) {
	return (
		<Page title='' description='' footer>
			<Banner title='Welcome' description='this is a description' />

			<div className='pt-20'>
				<TopArticles articles={posts} />
			</div>
		</Page>
	)
}

export const getStaticProps = () => {
	const posts = getPartialContent()

	return {
		props: {
			posts,
		},
	}
}
