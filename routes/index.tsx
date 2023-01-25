import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts: Post[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props.data;

  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <h1>Blog posts</h1>
        {posts.map((post: Post) => (
          <article>
            <a key={post.id} href={`/blog/${post.id}`}>{post.title}</a>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </div>
    </>
  );
}
