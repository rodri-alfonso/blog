interface Props {
	title: string
	description: string
	illustration?: string
}

export default function Banner({ title, description, illustration }: Props) {
	return (
		<section className='flex gap-2 bg-black h-36 rounded-2xl '>
			<img src={illustration} alt='illustration' />
			<div className='text-white grid gap-2'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</section>
	)
}
