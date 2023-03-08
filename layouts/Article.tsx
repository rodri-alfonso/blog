import { JSX } from "preact";

interface IArticleProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Article(props: IArticleProps) {
  return (
    <main class="p-8 bg-gray-900 w-screen">
      {props.children}
    </main>
  );
}
