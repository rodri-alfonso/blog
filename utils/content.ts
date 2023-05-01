import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PartialContent, Content } from '@/types'

//agregar objeto de configuracion para que reciba cualquier tipo de contenido, no solo articles.
export const getContent = (slug: string): Content => {
	const fileContents = fs.readFileSync(path.join(`content/articles/${slug}.mdx`), 'utf8')
	const { data, content } = matter(fileContents)

	return {
		...data,
		content,
	} as Content
}

export const getPartialContent = (): PartialContent[] => {
	const files = fs.readdirSync(path.join('content/articles'))
	const allPostsData = files.map((fileName) => {
		const slug = fileName.replace('.mdx', '')
		const fileContents = fs.readFileSync(path.join(`content/articles/${slug}.mdx`), 'utf8')
		const { data } = matter(fileContents)

		return {
			...data,
			slug,
		} as PartialContent
	})

	return allPostsData
}
