import { Typography, TYPOGRAPHY_COLOR_MAP } from '.'

export default function Serif({ text, className, color = 'default', variant = 'normal' }: Typography) {
	const VARIANT_MAP = {
		bold: '',
		medium: '',
		normal: '',
	}

	const styles = [VARIANT_MAP[variant], TYPOGRAPHY_COLOR_MAP[color], className].join(' ')

	return <h3 className={styles}>{text}</h3>
}
