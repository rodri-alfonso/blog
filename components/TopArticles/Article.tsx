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
    <article class="flex gap-2 p-3 border-b-2 hover:scale-105 hover:bg-gray-100">
      <Body text={`0${props.index}`} variant="medium" color="grey" />
      <a href={props.href}>
        <Body text={props.title} variant="medium" />
      </a>
      <Date class="ml-auto" date={props.date} />
    </article>
  );
}
