import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'

const DARK = 'dark'
const LIGHT = 'light'
const MODE_STORAGE_KEY = 'mode'

export function useMode() {
	const mode = useSignal('')

	const isDarkMode = localStorage.mode === DARK
	const isLight = mode.value === LIGHT

	const setDarkMode = () => {
		document.documentElement.classList.add(DARK)
		mode.value = DARK
		localStorage.mode = DARK
	}

	const setLightMode = () => {
		document.documentElement.classList.remove(DARK)
		mode.value = LIGHT
		localStorage.mode = LIGHT
	}

	useEffect(() => {
		const isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches

		if (MODE_STORAGE_KEY in localStorage) {
			if (isDarkMode) setDarkMode()
			else setLightMode()
			return
		}

		if (isDarkDefault) setDarkMode()
	}, [])

	function changeMode() {
		if (mode.value === DARK) setLightMode()
		else setDarkMode()
	}

	return { isLight, changeMode }
}
