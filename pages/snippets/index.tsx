import Page from '@layouts/Page'
import Banner from '@components/Banner'

export default function Snippets() {
	return (
		<Page description='' title="Rodrigo's Blog | Snippets">
			<Banner title='What I&#39;ve used' description={`Some code snippets that I used a lot`} />
			<section>snippets page</section>
		</Page>
	)
}
