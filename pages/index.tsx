import { Inter } from 'next/font/google'
import Link from 'next/link'
import Page from '@/components/layouts/Page'
import { getPartialPosts } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: any) {
	return (
		<Page title='' description=''>
			<ul>
				<li>
					{posts.map((post, index) => (
						<Link key={index} href={`/articles/${post.slug}`}>
							<h6>{post.data.title}</h6>
						</Link>
					))}
				</li>
			</ul>
		</Page>
	)
}

export const getStaticProps = () => {
	const posts = getPartialPosts()

	return {
		props: {
			posts,
		},
	}
}
