import Page from "../../layouts/Page.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../../utils/posts.ts";
import { PartialPost } from "../../utils/types.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PartialPost[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Articles(props: PageProps) {
  const { posts } = props.data;

  return (
    <Page title="Artciles page" path={props.url.pathname}>
      <section class="grid gap-2 pt-8">
        {posts.map((article: PartialPost) => (
          <a class="hover:underline font-bold" href={`/articles/${article.id}`}>
            {article.title}
          </a>
        ))}
      </section>
    </Page>
  );
}
