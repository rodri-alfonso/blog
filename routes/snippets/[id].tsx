import Page from "../../layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Snippet(props: PageProps) {
  return (
    <Page title="Snippet page" path={props.url.pathname}>
      <h1>This is the Snippet {props.params.id}</h1>
    </Page>
  );
}
