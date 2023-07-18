import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PartialContent, Content, PartialConfig, Config, FullContent } from '@content/types'
import { serialize } from 'next-mdx-remote/serialize'
import { remarkCodeHike } from '@code-hike/mdx'

export const serializeMdx = async (content: string) => {
	return await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				[remarkCodeHike, { autoImport: false, theme: 'one-dark-pro', showCopyButton: true, lineNumbers: true }],
			],
			useDynamicImport: true,
		},
	})
}

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

	return allContentData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const getFullContent = async ({ type }: PartialConfig): Promise<FullContent[]> => {
	const promises = [] as FullContent[]

	for await (const entry of fs.opendirSync(`content/${type}`)) {
		const slug = entry.name.replace('.mdx', '')

		const fileContents = fs.readFileSync(path.join(`content/${type}/${slug}.mdx`), 'utf8')
		const { data, content } = matter(fileContents)

		const serializedContent = await serializeMdx(content)

		const fullContent: FullContent = {
			content: serializedContent,
			date: data.date,
			description: data.description,
			highlight: data.highlight,
			readingTime: data.readingTime,
			title: data.title,
			topic: data.topic,
			type: data.type,
		}

		promises.push(fullContent)
	}

	return await Promise.all(promises)
}
