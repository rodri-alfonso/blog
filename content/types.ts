import { CONTENT_TYPE_MAP } from '@utils/config'

export type ContentType = 'articles' | 'notes' | 'snippets'
export type DataTopic = 'css' | 'javascript' | 'news' | 'webdev'
export type DataType = keyof typeof CONTENT_TYPE_MAP

export interface DataContent {
	date: string
	title: string
	description: string
	topic: DataTopic
	type: DataType
	readingTime: number
	highlight: boolean
}

export interface PartialContent extends DataContent {
	slug: string
}

export interface Content extends PartialContent {
	content: any
}

export interface Config extends PartialConfig {
	slug: string
}

export interface PartialConfig {
	type: ContentType
}

export interface FullContent extends DataContent {
	content: any
}
