export function simplifyDate(date: Date) {
	return date
		.toLocaleString('es', {
			month: 'long',
			year: 'numeric',
		})
		.replace(' de', ',')
}
