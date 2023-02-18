import { Handlers, PageProps } from "$fresh/server.ts";

import { listPosts } from "../utils/posts.ts";
import Page from "../layouts/Page.tsx";
import type { PartialPost } from "../utils/types.ts";
import TopArticles from "../components/TopArticles/index.tsx";
import TopNotes from "../components/TopNotes/index.tsx";
import Hero from "../components/Hero.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PartialPost[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props.data;

  return (
    <Page title="Deno Page" path={props.url.pathname}>
      <div class="grid gap-9 pt-8">
        <Hero />
        <TopNotes />
        <TopArticles
          articles={posts.filter((article: PartialPost) => article.hightlight)}
        />
      </div>
    </Page>
  );
}
