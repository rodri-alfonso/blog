import Section from "../../layouts/Section.tsx";
import Article from "./Article.tsx";

const articlesMock = [
  { title: "Article 1", date: new Date() },
  { title: "Article 2", date: new Date() },
  { title: "Article 3", date: new Date() },
  { title: "Article 4", date: new Date() },
  { title: "Article 5", date: new Date() },
];

export default function TopArticles() {
  return (
    <Section title="Highlighted articles">
      <div>
        {articlesMock.map((article, index) => (
          <Article
            title={article.title}
            index={index + 1}
            date={article.date}
          />
        ))}
      </div>
    </Section>
  );
}
