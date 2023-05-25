import { Typography, TYPOGRAPHY_COLOR_MAP } from '.'

export default function Caption({ text, className, color = 'default', variant = 'normal' }: Typography) {
	const VARIANT_MAP = {
		normal: 'text-sm font-normal',
		medium: 'text-sm font-medium',
		bold: 'text-sm font-bold',
	}

	const styles = [VARIANT_MAP[variant], TYPOGRAPHY_COLOR_MAP[color], className].join(' ')

	return <span className={styles}>{text}</span>
}
