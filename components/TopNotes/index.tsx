import Section from "../../layouts/Section.tsx";

const notesMock = [
  {
    title: "Note 1",
    description: "Some description for note",
    href: "/notes/some",
  },
  {
    title: "Note 2",
    description: "Some description for note",
    href: "/notes/some",
  },
  {
    title: "Note 3",
    description: "Some description for note",
    href: "/notes/some",
  },
  {
    title: "Note 4",
    description: "Some description for note",
    href: "/notes/some",
  },
];

interface ICardProps {
  href: string;
  title: string;
  description?: string;
}

function Card(props: ICardProps) {
  return (
    <a href={props.href} class="border-1 border-blue-100">
      <p>
        {props.title}
      </p>
      <p>
        {props.description}
      </p>
    </a>
  );
}

export default function TopNotes() {
  return (
    <Section title="Pinned notes">
      <div class="grid gap-7 grid-cols-4">
        {notesMock.map((note) => (
          <Card
            href={note.href}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </Section>
  );
}
