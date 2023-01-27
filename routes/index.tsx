import { Handlers, PageProps } from "$fresh/server.ts";

import { listPosts } from "../utils/posts.ts";
import Page from "../layouts/Page.tsx";
import type { Post } from "../utils/types.ts";
import Date from "../components/Date.tsx";

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
        <h1>Dashboard</h1>
        {posts.map((post: Post) => (
          <article>
            <a key={post.id} href={`/blog/${post.id}`}>{post.title}</a>
            <Date date={post.date} />
          </article>
        ))}
      </div>
    </Page>
  );
}
