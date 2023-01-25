import type { Post } from '../types.ts'
import { extract } from '$std-encode/any.ts'

import { render } from '$deno-gfm'

export async function loadPost(id: string): Promise<Post | null> {
	const raw: string | null = await Deno.readTextFile(`./content/posts/${id}.md`).catch(() => null)

	if (!raw) return null

	const { attrs, body } = extract(raw)
	const params = attrs as Record<string, string>

	const post: Post = {
		id,
		title: params.title,
		body: render(body),
		date: new Date(params.date),
		excerpt: params.excerpt,
	}
	return post
}

export async function listPosts(): Promise<Post[]> {
	const promises = []

	for await (const entry of Deno.readDir('./content/posts')) {
		const { name } = entry
		const [id, _] = name.split('.')
		if (id) promises.push(loadPost(id))
	}

	const posts = (await Promise.all(promises)) as Post[]

	posts.sort((a, b) => b.date.getTime() - a.date.getTime())

	return posts
}
