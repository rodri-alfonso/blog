import { HEADER_LINKS } from '@utils/config'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
	const { pathname } = useRouter()
	const isInPath = (path: string) => pathname === path

	return (
		<header className='flex justify-between items-center gap-4 py-4 bg-white bg-opacity-60 backdrop-blur-md  '>
			<img src='/avatar.svg' alt='icon' className='w-10 h-10' />

			<nav className=' flex gap-4'>
				{HEADER_LINKS.map((link, index) => (
					<Link
						key={link.name + index}
						href={link.path}
						className={`px-3 py-2 capitalize font-medium hover:bg-gray-100 rounded-lg hover:text-black transition-all active:scale-95 ${
							isInPath(link.path) ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
						}`}
					>
						{link.name}
					</Link>
				))}
			</nav>

			<div className='flex gap-1'></div>
		</header>
	)
}
