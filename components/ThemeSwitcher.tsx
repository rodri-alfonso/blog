import { useState } from 'react'

export default function ThemeSwitcher() {
	const [isLight, setIsLight] = useState(true)

	const ICON_PATH = `/${isLight ? 'sun' : 'moon'}.svg`

	return (
		<button onClick={() => setIsLight(!isLight)} className='active:scale-90 transition-all'>
			<img src={ICON_PATH} alt='' />
		</button>
	)
}
