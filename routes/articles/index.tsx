import Page from "../../layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Articles(props: PageProps) {
  return (
    <Page title="Artciles page" path={props.url.pathname}>
      <h1>This are te articles</h1>
    </Page>
  );
}
