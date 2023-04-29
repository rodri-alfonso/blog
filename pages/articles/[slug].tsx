import { getPartialPosts, getPost } from '@/utils'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

function Post({ data, content }) {
	return (
		<div>
			<h1>{data.title}</h1>
			<time>{data.date}</time>
			<MDXRemote {...content} />
		</div>
	)
}

export default Post

export const getStaticPaths = () => {
	const posts = getPartialPosts()
	const paths = posts.map((post) => ({ params: { slug: post.slug } }))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const post = getPost(params.slug)
	const mdxSource = await serialize(post.content)
	return {
		props: {
			data: post.data,
			content: mdxSource,
		},
	}
}
