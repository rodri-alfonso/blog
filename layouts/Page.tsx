import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Header from "../components/Header.tsx";

export interface IPageProps {
  title: string;
  children?: JSX.Element;
  path: string;
}

export default function Page(props: IPageProps) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header currentPath={props.path} />
      {props.children}
    </main>
  );
}
