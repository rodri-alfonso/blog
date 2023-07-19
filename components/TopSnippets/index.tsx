import { FullContent } from '@content/types'
// import MDXContent from '@components/MDXContent'
import Link from 'next/link'

interface Props {
	snippets: FullContent[]
}

export default function TopSnippets({ snippets }: Props) {
	const snippet = snippets[0]

	return (
		<div>
			<section className='bg-gray-800 p-10  rounded-xl grid gap-4 text-white'>
				<div className='flex items-center justify-between gap-4'>
					<div className='grid gap-2'>
						<span className='text-2xl font-bold'>Hightlighted utility</span>
						<p className='text-gray-300 max-w-xl font-medium'>One line utility to {snippet.title}</p>
					</div>
					<Link
						href='/snippets'
						className='rounded-md bg-white text-gray-800 py-2 px-3 font-semibold active:scale-95 transition-all whitespace-nowrap'
					>
						View Snippet
					</Link>
				</div>
				{/* <MDXContent content={snippets[0].content} /> */}
			</section>
		</div>
	)
}
