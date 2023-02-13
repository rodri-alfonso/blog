import Section from "../../layouts/Section.tsx";
import Article from "./Article.tsx";
import { PartialPost } from "../../utils/types.ts";

export default function TopArticles(props: { articles: PartialPost[] }) {
  return (
    <Section title="Highlighted articles">
      <div class="grid gap-2 pt-2">
        {props.articles.map((article, index) => (
          <Article
            title={article.title}
            index={index + 1}
            date={article.date}
            href={`/articles/${article.id}`}
          />
        ))}
      </div>
    </Section>
  );
}
