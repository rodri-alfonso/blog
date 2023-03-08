import Date from "@components/Date.tsx";
import Body from "@theme/typography/Body.tsx";

interface ITopArticle {
  title: string;
  date: Date;
  index: number;
  href: string;
}

export default function Article(props: ITopArticle) {
  return (
    <article class="flex gap-2 items-center rounded p-3 hover:bg-gray-100 transition-all">
      <Body text={`0${props.index}`} variant="medium" color="grey" />
      <a href={props.href} class="pl-5 active:scale-95">
        <Body text={props.title} variant="medium" />
      </a>
      <Date class="ml-auto" date={props.date} />
    </article>
  );
}
