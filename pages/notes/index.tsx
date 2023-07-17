import Page from '@layouts/Page'
import Banner from '@components/Banner'
import NoteContent from '@components/NoteContent'
import { getFullContent } from '@utils/content'

export default function Notes({ notes }: any) {
	return (
		<Page description='' title="Rodrigo's Blog | Notes">
			<Banner title='What I&#39;ve read' description={`A few notes about CSS, web performance, and news`} />
			<div className='pt-10 grid gap-4 w-10/12 mx-auto'>
				{notes.map((note: any, index: number) => (
					<NoteContent key={`${note.data.topic}_${index}`} {...note.data} content={note.content} />
				))}
			</div>
		</Page>
	)
}

export const getStaticProps = async () => {
	const notes = await getFullContent({ type: 'notes' })

	return {
		props: {
			notes,
		},
	}
}
