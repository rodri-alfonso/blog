import Date from "../Date.tsx";
import Body from "../../theme/typography/Body.tsx";

interface ITopArticle {
  title: string;
  date: Date;
  index: number;
  href: string;
}

export default function Article(props: ITopArticle) {
  return (
    <article class="flex gap-2">
      <Body text={String(props.index)} variant="medium" />
      <a href={props.href}>
        <Body text={props.title} variant="medium" />
      </a>
      <Date class="ml-auto" date={props.date} />
    </article>
  );
}
