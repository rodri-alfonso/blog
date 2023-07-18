import NoteContent from '@components/NoteContent'
import Link from 'next/link'

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

			<Link
				href='/notes'
				className='font-medium flex gap-1 justify-center hover:gap-2.5 items-center transition-all w-44 rounded-xl hover:bg-gray-100 py-2 active:scale-95'
			>
				<p className=''>View all notes</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>
		</section>
	)
}
