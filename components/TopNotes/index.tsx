import NoteContent from '@components/NoteContent'
import Link from 'next/link'
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
