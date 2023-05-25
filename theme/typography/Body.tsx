import { Typography, TYPOGRAPHY_COLOR_MAP } from '.'

export default function Body({ text, className, color = 'default', variant = 'normal' }: Typography) {
	const VARIANT_MAP = {
		normal: 'text-base font-normal',
		medium: 'text-base font-medium',
		bold: 'text-lg font-bold',
	}

	const styles = [VARIANT_MAP[variant], TYPOGRAPHY_COLOR_MAP[color], className].join(' ')

	return <p className={styles}>{text}</p>
}
