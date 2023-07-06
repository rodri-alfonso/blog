interface Recommendation {
	link: string
	name: string
	description: string
}

export function useRecommendations(): Recommendation {
	return {
		link: 'https://place-puppy.com',
		name: 'Place Puppy',
		description:
			'A quick and simple service for getting pictures of puppies for use as placeholders in your designs or codes.',
	}
}
