interface Props {
	title: string
	description: string
	topic: 'css' | 'language' | ''
}

export default function NoteContent({ title, description, topic }: Props) {
	return (
		<article>
			<p>{description}</p>
		</article>
	)
}
