import Page from '@layouts/Page'
import Banner from '@components/Banner'
import Collapsable from '@components/Collapsable'
import { getFullContent } from '@utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import { FullContent } from '@content/types'

interface Props {
	snippets: FullContent[]
}

export default function Snippets({ snippets }: Props) {
	return (
		<Page description='' title="Rodrigo's Blog | Snippets">
			<Banner
				title='What I&#39;ve used'
				description={`A collection with ${snippets.length} JavaScript snippets that I used most`}
			/>
			<section className='pt-4 grid gap-4'>
				<h1 className='text-xl font-medium pl-4'>One line utilities</h1>
				<div className='grid gap-0.5 text-gray-600 hover:text-gray-400 font-medium first-letter:capitalize'>
					{snippets.map((snippet, index: number) => (
						<Collapsable key={snippet.title} label={snippet.title} tag={snippet.topic} open={index === 0}>
							<MDXRemote components={{ CH }} {...snippet.content} />
						</Collapsable>
					))}
				</div>
			</section>
		</Page>
	)
}

export const getStaticProps = async () => {
	const snippets = await getFullContent({ type: 'snippets' })

	return {
		props: {
			snippets,
		},
	}
}
