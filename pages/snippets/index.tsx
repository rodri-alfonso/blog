import Page from '@layouts/Page'
import Banner from '@components/Banner'
import Collapsable from '@components/Collapsable'

const MOCK = [
	{
		title: 'Get the current date',
	},
	{
		title: 'Get the random item from an array',
	},
]

export default function Snippets() {
	return (
		<Page description='' title="Rodrigo's Blog | Snippets">
			<Banner title='What I&#39;ve used' description={`A collection with 2 JavaScript snippets that I used most`} />
			<section className='pt-4 grid gap-4'>
				<h1 className='text-xl font-medium pl-4'>One line utilities</h1>
				<div>
					{MOCK.map((item) => (
						<Collapsable key={item.title} label={item.title}>
							{item.title}
						</Collapsable>
					))}
				</div>
			</section>
		</Page>
	)
}
