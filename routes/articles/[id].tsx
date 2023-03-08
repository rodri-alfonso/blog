import { Handlers, PageProps } from "$fresh/server.ts";
import ArticlePage from "../../layouts/Article.tsx";
import { asset } from "$fresh/runtime.ts";
import Banner from "../../layouts/articles/Banner.tsx";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$deno-gfm";
import Headline from "../../theme/typography/Headline.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const post = await loadPost(id);

    return ctx.render({ post });
  },
};

export default function Article(props: PageProps) {
  const { post } = props.data || {};

  const classArticle = "markdown-body bg-gray-900!";

  return (
    <ArticlePage>
      <article class="max-w-screen-md mx-auto">
        <div class="pb-20 grid gap-16">
          <a href="/articles">Back</a>

          <Banner title={`This is the article: ${props.params.id}`} />
        </div>

        {
          /* <h1>{post.title}</h1>
        <span>{Intl.DateTimeFormat("es").format(post.date)}</span> */
        }
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div
          class={classArticle}
          data-color-mode="dark"
          data-dark-theme="dark"
          dangerouslySetInnerHTML={{ __html: post.body }}
        >
          {post.body}
        </div>
      </article>
    </ArticlePage>
  );
}
