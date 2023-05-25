import { ReactNode } from 'react'
import Page from './Page'
import { Content } from '@content/types'
import { MDXRemote } from 'next-mdx-remote'

interface Props {
	children?: ReactNode | ReactNode[]
	article: Content
}

export default function Article({ children, article }: Props) {
	const { content, date, description, illustration, slug, title } = article

	const Banner = () => {
		return (
			<section className='grid gap-4 bg-gray-200 p-6 w-full h-20'>
				<img src={`illustrations/${illustration}`} alt='' />
				<h1>{title}</h1>
			</section>
		)
	}

	return (
		<Page title={title} description={description}>
			<Banner />
			<article>
				<MDXRemote {...content} />
			</article>
		</Page>
	)
}
