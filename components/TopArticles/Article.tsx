import Date from "../Date.tsx";

interface ITopArticle {
  title: string;
  date: Date;
  index: number;
}

export default function Article(props: ITopArticle) {
  return (
    <article class="flex gap-2">
      <span>{props.index}</span>
      <h3>{props.title}</h3>
      <Date class="ml-auto" date={props.date} />
    </article>
  );
}
