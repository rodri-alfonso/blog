import Section from "../../layouts/Section.tsx";

const snippetsMock = [
  {
    title: "Note 1",
    href: "/notes/some",
  },
  {
    title: "Note 2",
    href: "/notes/some",
  },
  {
    title: "Note 3",
    href: "/notes/some",
  },
  {
    title: "Note 4",
    href: "/notes/some",
  },
];

interface ICardProps {
  href: string;
  title: string;
}

function Card(props: ICardProps) {
  return (
    <a href={props.href} class="border-1 border-blue-100">
      <p>
        {props.title}
      </p>
    </a>
  );
}

export default function TopSnippets() {
  return (
    <Section title="Pinned snippets">
      <div class="grid gap-7 grid-cols-4">
        {snippetsMock.map((snipp) => (
          <Card
            href={snipp.href}
            title={snipp.title}
          />
        ))}
      </div>
    </Section>
  );
}
