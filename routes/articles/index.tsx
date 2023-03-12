import Page from "@layouts/Page.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "@utils/posts.ts";
import { PartialPost } from "@utils/types.ts";
import Body from "@theme/typography/Body.tsx";
import Heading from "@layouts/Heading.tsx";

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
        class="text-gray-900 bg-gray-100 py-2 px-4  rounded-md font-bold flex justify-between hover:bg-gray-200 active:bg-gray-100 transition-all dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-200"
        href={`/articles/${props.article.id}`}
      >
        <Body text={props.article.title} />
        <Body text={props.article.date.toDateString()} />
      </a>
    );
  }

  return (
    <Page
      title="Artciles page"
      path={props.url.pathname}
      class="text-gray-800 dark:text-gray-200 bg-white dark:bg-black grid gap-4"
    >
      <Heading
        title="What I've Written"
        description={`${posts.length} Articles about UI architecture, design systems, CSS and frontend topics like web performance`}
      />
      <section class="pt-8 grid gap-2">
        {posts.map((article: PartialPost) => <Article article={article} />)}
      </section>
    </Page>
  );
}
