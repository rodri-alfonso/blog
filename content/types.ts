export interface DataContent {
	date: string
	description: string
	title: string
	illustration: string
}

export interface PartialContent extends DataContent {
	slug: string
}

export interface Content extends PartialContent {
	content: any
}

export type ContentType = 'articles' | 'notes' | 'snippets'

export interface Config extends PartialConfig {
	slug: string
}

export interface PartialConfig {
	type: ContentType
}
