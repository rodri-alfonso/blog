import Page from "../../layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Article(props: PageProps) {
  return (
    <Page title="Artciles page" path={props.url.pathname}>
      <h1>This is the article {props.params.id}</h1>
    </Page>
  );
}
