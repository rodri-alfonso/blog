import NoteContent from '@components/NoteContent'

interface Note {
	title: string
	description: string
	body: string
}

export default function TopNotes({ notes }: any) {
	const note = notes[0]

	return (
		<section className='grid justify-center gap-4'>
			<NoteContent content={note.content} {...note.data} />
		</section>
	)
}
