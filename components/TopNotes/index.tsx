import Section from "@layouts/Section.tsx";
import Body from "@theme/typography/Body.tsx";

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
    title: "Note 3",
    description: "Some description for note",
    href: "/notes/some",
  },
];

interface ICardProps {
  href: string;
  title: string;
}

function Card(props: ICardProps) {
  return (
    <a
      href={props.href}
      class="border-1 border-gray-300 rounded p-3 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
    >
      <Body text={props.title} variant="medium" />
    </a>
  );
}

export default function TopNotes() {
  return (
    <Section title="Highlighted notes" class="grid gap-7 grid-cols-4 pt-7">
      {notesMock.map((note) => (
        <Card
          href={note.href}
          title={note.title}
        />
      ))}
    </Section>
  );
}
