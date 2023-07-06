import { useRecommendations } from '../hooks/recommendations'

export default function Recomendator() {
	const { link, name, description } = useRecommendations()

	return (
		<>
			<section className='bg-gray-800 p-8 py-6 rounded-xl flex items-center flex-wrap gap-6 justify-between text-white'>
				<div className='grid gap-2'>
					<span className='text-2xl font-bold'>Weekly discovery</span>
					<p className='text-gray-300 max-w-xl font-medium'>{description}</p>
				</div>
				<a
					href={link}
					className='rounded-md bg-white text-gray-800 py-2 px-3 font-semibold active:scale-95 transition-all whitespace-nowrap'
					target='_blank'
					rel='noreferrer noopener'
				>
					Go to {name}
				</a>
			</section>
		</>
	)
}
