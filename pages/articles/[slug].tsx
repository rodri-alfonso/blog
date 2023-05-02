import { getPartialContent, getContent } from '../../utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Content } from '@content/types'

export default function Articles({ content, date, title }: Content) {
	return (
		<div>
			<h1>{title}</h1>
			<time>{date}</time>
			<MDXRemote {...content} />
		</div>
	)
}

export const getStaticPaths = () => {
	const posts = getPartialContent('articles')
	const paths = posts.map((post) => ({ params: { slug: post.slug } }))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }: any) => {
	const post = getContent({ type: 'articles', slug: params.slug })
	const mdxSource = await serialize(post.content)
	return {
		props: {
			...post,
			content: mdxSource,
		},
	}
}
