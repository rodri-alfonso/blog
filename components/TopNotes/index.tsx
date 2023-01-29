import Section from "../../layouts/Section.tsx";
import Body from "../../theme/typography/Body.tsx";
import Pinned from "../../icons/Pinned.tsx";

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
];

interface ICardProps {
  href: string;
  title: string;
}

function Card(props: ICardProps) {
  return (
    <a
      href={props.href}
      class="border-1 border-blue-100 p-3 flex items-center gap-2"
    >
      <Pinned width={20} height={20} />
      <Body text={props.title} variant="medium" />
    </a>
  );
}

export default function TopNotes() {
  return (
    <Section title="Pinned notes" class="grid gap-7 grid-cols-3">
      {notesMock.map((note) => (
        <Card
          href={note.href}
          title={note.title}
        />
      ))}
    </Section>
  );
}
