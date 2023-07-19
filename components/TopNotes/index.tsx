import NoteContent from '@components/NoteContent'
import { FullContent } from '@content/types'

interface Props {
	notes: FullContent[]
}

export default function TopNotes({ notes }: Props) {
	const note = notes[0]

	return (
		<section className='grid gap-4 w-10/12 '>
			{notes.map((note, index: number) => (
				<NoteContent {...note} key={`${note.topic}_${index}`} />
			))}
		</section>
	)
}
