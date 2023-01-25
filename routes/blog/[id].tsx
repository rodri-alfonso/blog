import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$deno-gfm";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const post = await loadPost(id);

    return ctx.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props.data || {};

  return (
    <article>
      <h1>{post.title}</h1>
      <span>{Intl.DateTimeFormat("es").format(post.date)}</span>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      >
        {post.body}
      </div>
    </article>
  );
}
