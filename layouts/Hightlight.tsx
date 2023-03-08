import { JSX } from "preact";
import Subtitle from "@theme/typography/Subtitle.tsx";
import Body from "@theme/typography/Body.tsx";

interface HeadingProps extends JSX.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
}

export default function Hightlight(props: HeadingProps) {
  return (
    <section>
      <Subtitle text={props.title} variant="medium" />
      <Body text={props.description || ""} variant="medium" />
      <div class={`pt-2 ${props.class}`}>
        {props.children}
      </div>
    </section>
  );
}
