import Page from "@layouts/Page.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "@utils/posts.ts";
import { PartialPost } from "@utils/types.ts";
import Body from "@theme/typography/Body.tsx";
import Heading from "@layouts/Heading.tsx";
import { simplifyDate } from "@utils/date.ts";
import Caption from "@theme/typography/Caption.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PartialPost[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Articles(props: PageProps) {
  const { posts } = props.data;

  const Article = (props: { article: PartialPost }) => {
    return (
      <a
        class="py-3 px-4 rounded-md flex justify-between dark:hover:bg-gray-800 dark:text-gray-200  dark:hover:text-gray-50 hover:scale-105 active:scale-100 transition-all"
        href={`/articles/${props.article.id}`}
      >
        <Body text={props.article.title} color="current" variant="medium" />
        <Caption
          class="capitalize text-current"
          text={simplifyDate(props.article.date)}
          variant="medium"
        />
      </a>
    );
  };

  return (
    <Page
      title="Artciles page"
      path={props.url.pathname}
      class="text-gray-800 dark:text-gray-200 bg-white dark:bg-black grid gap-4"
    >
      <Heading
        title="All articles"
        class="px-4"
        description={`${posts.length} Articles about UI architecture, design systems, and advanced CSS`}
      />
      <section class="pt-8 grid gap-2">
        {posts.map((article: PartialPost) => <Article article={article} />)}
      </section>
    </Page>
  );
}
