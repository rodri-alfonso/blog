import { Handlers, PageProps } from "$fresh/server.ts";

import { listPosts } from "../utils/posts.ts";
import Page from "../layouts/Page.tsx";
import type { Post } from "../utils/types.ts";
import TopArticles from "../components/TopArticles/index.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
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

        <TopArticles />

        <section>
          <h2>Pinned notes</h2>
        </section>
        <section>
          <h2>Pinned snippets</h2>
        </section>
      </div>
    </Page>
  );
}
