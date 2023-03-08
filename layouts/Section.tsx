import { JSX } from "preact";
import Subtitle from "@theme/typography/Subtitle.tsx";
import Body from "@theme/typography/Body.tsx";

interface ISectionProps {
  title: string;
  description?: string;
  class?: string;
  children?: JSX.Element | JSX.Element[];
}

export default function Section(props: ISectionProps) {
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
