import Page from '@layouts/Page'
import Banner from '@components/Banner'
import NoteSelector from '@components/NoteSelector'

export default function Notes() {
	return (
		<Page description='' title="Rodrigo's Blog | Notes">
			<Banner title='What I&#39;ve read' description={`A few notes about CSS, web performance, and news`} />
			<div className='w-full mx-auto'>
				<NoteSelector />
			</div>
		</Page>
	)
}
