import { getPartialContent, getContent } from '../../utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Content } from '@content/types'
import Page from '@layouts/Page'
import Link from 'next/link'
import IconOrchester from '@assets/icons'
import styles from '@styles/content.module.css'
import { remarkCodeHike } from '@code-hike/mdx'
import { CH } from '@code-hike/mdx/components'

export default function Article({ content, date, description, title }: Content) {
	const Banner = () => {
		return (
			<section className='flex flex-col gap-32 rounded-lg overflow-hidden'>
				<Link
					href='/articles'
					className='flex items-center gap-4 w-60 hover:underline text-gray-800 font-medium text-lg active:scale-95 transition-all'
				>
					<IconOrchester icon='arrow-narrow' size={32} />
					Back to overview
				</Link>
				<div className='flex flex-col gap-2'>
					<h1 className='font-bold text-4xl first-letter:uppercase'>{title}</h1>
					<div className='flex items-center gap-4 text-gray-600 text-base'>
						<span className='flex items-center gap-1'>
							<IconOrchester icon='calendar' size={18} />
							{date}
						</span>
						<span className='flex items-center gap-1 '>
							<IconOrchester icon='clock' size={18} />
							15 min. read
						</span>
					</div>
				</div>
			</section>
		)
	}

	return (
		<Page title={title} description={description} hideHeader>
			<div className='max-w-screen-md m-auto grid gap-20'>
				<Banner />
				<article className={`${styles.content} prose`}>
					<MDXRemote {...content} components={{ CH }} />
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
	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [
				[remarkCodeHike, { autoImport: false, theme: 'one-dark-pro', showCopyButton: true, lineNumbers: true }],
			],
			useDynamicImport: true,
		},
	})
	return {
		props: {
			...post,
			content: mdxSource,
		},
	}
}
