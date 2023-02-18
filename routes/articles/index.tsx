import Page from "../../layouts/Page.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../../utils/posts.ts";
import { PartialPost } from "../../utils/types.ts";
import Body from "../../theme/typography/Body.tsx";
import Subtitle from "../../theme/typography/Subtitle.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PartialPost[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Articles(props: PageProps) {
  const { posts } = props.data;

  function Article(props: { article: PartialPost }) {
    return (
      <a
        class="py-2 px-4  rounded-md font-bold flex justify-between hover:bg-gray-200 active:bg-gray-100 transition-all"
        href={`/articles/${props.article.id}`}
      >
        <Body text={props.article.title} />
        <Body text={props.article.date.toDateString()} />
      </a>
    );
  }

  return (
    <Page title="Artciles page" path={props.url.pathname}>
      <Subtitle text="What I've Written" variant="bold" class="pt-6" />
      <Body
        text={`${posts.length} Articles about UI architecture, design systems, CSS and frontend topics like web performance`}
        variant="medium"
        class="pt-2"
      />
      <section class="pt-8">
        {posts.map((article: PartialPost) => <Article article={article} />)}
      </section>
    </Page>
  );
}
