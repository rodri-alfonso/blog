import Page from "../../layouts/Page.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Note(props: PageProps) {
  return (
    <Page title="Note page" path={props.url.pathname}>
      <h1>This is the note {props.params.id}</h1>
    </Page>
  );
}
