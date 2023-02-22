import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Header from "../components/Header.tsx";

export interface IPageProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
  path?: string;
  class?: string;
}

export default function Page(props: IPageProps) {
  return (
    <main class="p-4 w-screen h-screen dark:bg-black">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div class="max-w-screen-lg mx-auto">
        {props.path && <Header currentPath={props.path} />}

        <div
          class={`dark:bg-black transition-all bg-white col-span-6 rounded-2xl p-6 ${props.class}`}
        >
          {props.children}
        </div>
      </div>
    </main>
  );
}
