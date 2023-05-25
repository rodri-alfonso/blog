import { Typography, TYPOGRAPHY_COLOR_MAP } from '.'

export default function Headline({ text, className, color = 'default', variant = 'normal' }: Typography) {
	const VARIANT_MAP = {
		normal: 'text-4xl font-normal',
		medium: 'text-5xl font-bold',
		bold: 'text-6xl font-bold',
	}

	const styles = [VARIANT_MAP[variant], TYPOGRAPHY_COLOR_MAP[color], className].join(' ')

	return <h1 className={styles}>{text}</h1>
}
