import { JSX } from "preact";

interface IArticleProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Article(props: IArticleProps) {
  return (
    <article class="p-8">
      {props.children}
    </article>
  );
}
