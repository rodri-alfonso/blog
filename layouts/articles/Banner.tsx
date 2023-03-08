import Headline from "@theme/typography/Headline.tsx";
import { JSX } from "preact";

interface HeadingProps extends JSX.HTMLAttributes<HTMLElement> {
  title: string;
}

export default function Banner(props: { title: string }) {
  return (
    <section class="grid gap-8">
      <div class="bg-white w-full rounded-lg h-56">
      </div>
      <Headline
        variant="bold"
        text={props.title}
      />
    </section>
  );
}
