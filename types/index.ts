export interface DataContent {
	date: string
	description: string
	title: string
	illustration: string
}

export interface Content extends DataContent {
	content: any
	slug: string
}

export interface PartialContent extends DataContent {
	slug: string
}
