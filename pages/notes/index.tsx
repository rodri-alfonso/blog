import Page from '@layouts/Page'
import Banner from '@components/Banner'
import NoteContent from '@components/NoteContent'
import { getFullContent } from '@utils/content'
import { FullContent } from '@content/types'

interface Props {
	notes: FullContent[]
}

export default function Notes({ notes }: Props) {
	return (
		<Page description='' title="Rodrigo's Blog | Notes">
			<Banner title='What I&#39;ve read' description={`A few notes about CSS, web performance, and news`} />
			<div className='pt-10 grid gap-4 w-10/12 mx-auto'>
				{notes.map((note, index: number) => (
					<NoteContent key={`${note.topic}_${index}`} {...note} />
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
