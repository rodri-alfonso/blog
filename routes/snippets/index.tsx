import Page from "@layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Snippets(props: PageProps) {
  return (
    <Page title="Snippets page" path={props.url.pathname}>
      <h1>This are te Snippets</h1>
      <a href="/snippets/snippet-example">Snippet example</a>
    </Page>
  );
}
