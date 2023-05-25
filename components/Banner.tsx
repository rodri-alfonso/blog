interface Props {
	title: string
	description: string
	illustration?: string
}

export default function Banner({ title, description, illustration }: Props) {
	return (
		<section className='bg-gray-900 w-full rounded-2xl h-36 flex items-center gap-10 px-4'>
			<div className='w-36 h-full relative'>
				<img src='/avatar-torso.svg' className='absolute bottom-0 left-1' alt='' />
			</div>
			<div className='flex flex-col gap-1 text-white'>
				<h2 className='text-3xl font-bold'>{title}</h2>
				<p className='text-gray-200 '>{description}</p>
			</div>
		</section>
	)
}
