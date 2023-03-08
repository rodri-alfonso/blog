import { assertEquals } from '$std-testing/asserts.ts'
import { loadPost } from '@utils/posts.ts'

Deno.test('loadPost() returns null if the post does not exist', async () => {
	const post = await loadPost('non-exist')
	assertEquals(post, null)
})

Deno.test('loadPost() returns an object if the post does exist', async () => {
	const post = await loadPost('hello-word')
	assertEquals(post?.id, 'hello-word')
})
