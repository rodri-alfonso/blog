import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Header from "../components/Header.tsx";

export interface IPageProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
  path?: string;
}

export default function Page(props: IPageProps) {
  return (
    <main class="m-auto p-8 w-full max-w-screen-lg">
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.path && <Header currentPath={props.path} />}

      {props.children}
    </main>
  );
}
