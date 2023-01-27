import { Handlers, PageProps } from "$fresh/server.ts";

import { listPosts } from "../utils/posts.ts";
import Page from "../layouts/Page.tsx";
import type { Post } from "../utils/types.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts: Post[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props.data;

  return (
    <Page title="Deno Page" path={props.url.pathname}>
      <div>
        <h1>Blog posts</h1>
        {posts.map((post: Post) => (
          <article>
            <a key={post.id} href={`/blog/${post.id}`}>{post.title}</a>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </div>
    </Page>
  );
}
