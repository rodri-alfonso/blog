interface Props {
	lines?: number
}

export default function Space({ lines = 1 }: Props) {
	const parsedLines = Array.from({ length: lines }, (_, index) => index + 1)

	return (
		<>
			{parsedLines.map((line) => (
				<br key={line} />
			))}
		</>
	)
}
