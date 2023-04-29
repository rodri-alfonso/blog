import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPost = (slug: string) => {
	const fileContents = fs.readFileSync(path.join(`content/articles/${slug}.mdx`), 'utf8')
	const { data, content } = matter(fileContents)
	return {
		data,
		content,
	}
}

export const getPartialPosts = () => {
	const files = fs.readdirSync(path.join('content/articles'))
	const allPostsData = files.map((fileName) => {
		const slug = fileName.replace('.mdx', '')
		const fileContents = fs.readFileSync(path.join(`content/articles/${slug}.mdx`), 'utf8')
		const { data } = matter(fileContents)
		return {
			slug,
			data,
		}
	})

	return allPostsData
}
