import Date from "../Date.tsx";

interface ITopArticle {
  title: string;
  date: Date;
  index: number;
  href: string;
}

export default function Article(props: ITopArticle) {
  return (
    <article class="flex gap-2">
      <span>{props.index}</span>
      <a href={props.href}>{props.title}</a>
      <Date class="ml-auto" date={props.date} />
    </article>
  );
}
