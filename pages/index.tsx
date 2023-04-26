import { getPost, getPartialPosts } from '@/utils'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: any) {
	return (
		<main>
			<ul>
				<li>
					{posts.map((post, index) => (
						<Link key={index} href={`/articles/${post.slug}`}>
							<h6>{post.data.title}</h6>
						</Link>
					))}
				</li>
			</ul>
		</main>
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
