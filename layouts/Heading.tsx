import Subtitle from "@theme/typography/Subtitle.tsx";
import Body from "@theme/typography/Body.tsx";
import { JSX } from "preact";

interface HeadingProps extends JSX.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <section class="grid gap-2">
      <Subtitle text={props.title} variant="bold" />
      {props.description &&
        (
          <Body
            text={props.description}
            variant="medium"
          />
        )}
    </section>
  );
}
