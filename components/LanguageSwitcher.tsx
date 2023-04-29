import { useState } from 'react'

export default function LanguageSwitcher() {
	const [isSpanish, setIsSpanish] = useState(false)

	return (
		<button
			onClick={() => setIsSpanish(!isSpanish)}
			className='py-2 bg-gray-50 rounded-md font-medium hover:bg-gray-100 w-10 active:scale-95 transition-all'
		>
			{isSpanish ? 'ES' : 'EN'}
		</button>
	)
}
