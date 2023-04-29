import { useState } from 'react'

export default function ThemeSwitcher() {
	const [isLight, setIsLight] = useState(true)

	const ICON_PATH = `/${isLight ? 'sun' : 'moon'}.svg`

	return (
		<button
			onClick={() => setIsLight(!isLight)}
			className='active:scale-90 transition-all hover:bg-gray-100 px-2 py-2 rounded-md'
		>
			<img src={ICON_PATH} alt='' />
		</button>
	)
}
