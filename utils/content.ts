import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PartialContent, Content, ContentType } from '@content/types'

interface Props {
	slug: string
	type: ContentType
}

export const getContent = ({ slug, type }: Props): Content => {
	const fileContents = fs.readFileSync(path.join(`content/${type}/${slug}.mdx`), 'utf8')
	const { data, content } = matter(fileContents)

	return {
		...data,
		content,
	} as Content
}

export const getPartialContent = (type: ContentType): PartialContent[] => {
	const files = fs.readdirSync(path.join(`content/${type}`))
	const allContentData = files.map((fileName) => {
		const slug = fileName.replace('.mdx', '')
		const fileContents = fs.readFileSync(path.join(`content/${type}/${slug}.mdx`), 'utf8')
		const { data } = matter(fileContents)

		return {
			...data,
			slug,
		} as PartialContent
	})

	return allContentData
}
