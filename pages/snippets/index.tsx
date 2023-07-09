import Page from '@layouts/Page'
import Banner from '@components/Banner'
import Collapsable from '@components/Collapsable'
import { getSnippets } from '@utils/content'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'

export default function Snippets({ snippets }: any) {
	return (
		<Page description='' title="Rodrigo's Blog | Snippets">
			<Banner
				title='What I&#39;ve used'
				description={`A collection with ${snippets.length} JavaScript snippets that I used most`}
			/>
			<section className='pt-4 grid gap-4'>
				<h1 className='text-xl font-medium pl-4'>One line utilities</h1>
				<div className='grid gap-0.5 text-gray-600 hover:text-gray-400 font-medium first-letter:capitalize'>
					{snippets.map((snippet: any, index: number) => (
						<Collapsable
							key={snippet.data.title}
							label={snippet.data.title}
							tag={snippet.data.topic}
							open={index === 0}
						>
							<MDXRemote components={{ CH }} {...snippet.content} />
						</Collapsable>
					))}
				</div>
			</section>
		</Page>
	)
}

export const getStaticProps = async () => {
	const snippets = await getSnippets()

	return {
		props: {
			snippets,
		},
	}
}
