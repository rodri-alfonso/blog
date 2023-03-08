import Page from "@layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Notes(props: PageProps) {
  return (
    <Page title="Notes page" path={props.url.pathname}>
      <h1>This are te Notes</h1>
      <a href="/notes/note-example">Note example</a>
    </Page>
  );
}
