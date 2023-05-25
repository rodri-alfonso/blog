import { getPartialContent, getContent } from '../../utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Content } from '@content/types'
import Page from '@layouts/Page'
import Link from 'next/link'
import IconOrchester from '@assets/icons'

export default function Article({ content, date, description, illustration, slug, title }: Content) {
	const Banner = () => {
		return (
			<section className='grid gap-4 h-80 rounded-lg overflow-hidden'>
				<Link
					href='/articles'
					className='flex items-center gap-2 w-60 hover:underline text-gray-600 font-medium text-md active:scale-95 transition-all'
				>
					<IconOrchester icon='arrow-narrow' size={32} />
					Back to overview
				</Link>
				{/* <img
					src={`/illustrations/${illustration}.png`}
					alt=''
					className='object-contain w-full h-52 border-1 border-gray-100 rounded-xl shadow-xl p-2'
				/> */}
				<div className='flex flex-col gap-2'>
					<h1 className='font-semibold text-4xl first-letter:uppercase'>{title}</h1>
					{/* <p className='first-letter:uppercase font-medium text-gray-600'>{description}</p> */}
					<div className='flex items-center gap-2 text-gray-600 text-sm'>
						<span>{date}</span>
						<span className='flex items-center gap-1 '>
							<IconOrchester icon='clock' size={14} />
							15 min. read
						</span>
					</div>
				</div>
			</section>
		)
	}

	return (
		<Page title={title} description={description}>
			<div className='max-w-screen-md m-auto'>
				<Banner />
				<article>
					<MDXRemote {...content} />
				</article>
			</div>
		</Page>
	)
}

export const getStaticPaths = () => {
	const posts = getPartialContent({ type: 'articles' })
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
