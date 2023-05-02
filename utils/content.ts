import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PartialContent, Content, PartialConfig, Config } from '@content/types'

export const getContent = ({ slug, type }: Config): Content => {
	const fileContents = fs.readFileSync(path.join(`content/${type}/${slug}.mdx`), 'utf8')
	const { data, content } = matter(fileContents)

	return {
		...data,
		content,
	} as Content
}

export const getPartialContent = ({ type }: PartialConfig): PartialContent[] => {
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
