export interface Post {
	id: string
	title: string
	body: string
	date: Date
	excerpt: string
}

export interface PartialPost {
	id: string
	title: string
	date: Date
	hightlight: boolean
}
