interface Note {
	title: string
	description: string
	body: string
}

const MOCK = [
	{
		title: 'How to use React',
		description:
			'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
		body: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
	},
]

export default function TopNotes(notes: Note[] = MOCK) {
	return (
		<section className=''>
			{MOCK.map((note, index) => (
				<div key={index}>
					<h1>{note.title}</h1>
				</div>
			))}
		</section>
	)
}
