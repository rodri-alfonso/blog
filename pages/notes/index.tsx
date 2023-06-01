import Page from '@layouts/Page'
import Banner from '@components/Banner'

export default function Notes() {
	return (
		<Page description='' title="Rodrigo's Blog | Notes">
			<Banner title='What I&#39;ve studied' description={`A few notes about CSS, web performance, and news`} />
			<section>notes page</section>
		</Page>
	)
}
