export function formatDate(date: Date, language: 'es' | 'en' = 'es') {
	return date
		.toLocaleString(language, {
			month: 'long',
			year: 'numeric',
		})
		.replace(' de', ',')
}
