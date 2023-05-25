import { Typography, TYPOGRAPHY_COLOR_MAP } from '.'

export default function Subtitle({ text, className, color = 'default', variant = 'normal' }: Typography) {
	const VARIANT_MAP = {
		normal: 'text-xl font-normal',
		medium: 'text-2xl font-medium',
		bold: 'text-3xl font-bold',
	}

	const styles = [VARIANT_MAP[variant], TYPOGRAPHY_COLOR_MAP[color], className].join(' ')

	return <h2 className={styles}>{text}</h2>
}
