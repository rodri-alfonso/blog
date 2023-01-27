import Section from "../../layouts/Section.tsx";
import Article from "./Article.tsx";

const articlesMock = [
  { title: "Article 1", date: new Date(), href: "/articles/some" },
  { title: "Article 2", date: new Date(), href: "/articles/some" },
  { title: "Article 3", date: new Date(), href: "/articles/some" },
  { title: "Article 4", date: new Date(), href: "/articles/some" },
  { title: "Article 5", date: new Date(), href: "/articles/some" },
];

export default function TopArticles() {
  return (
    <Section title="Highlighted articles">
      <>
        <div>
          {articlesMock.map((article, index) => (
            <Article
              title={article.title}
              index={index + 1}
              date={article.date}
              href={article.href}
            />
          ))}
        </div>
        <a href="/articles">See all articles</a>
      </>
    </Section>
  );
}
