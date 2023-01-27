import { JSX } from "preact";

interface ISectionProps {
  title: string;
  description?: string;
  class?: string;
  children?: JSX.Element;
}

export default function Section(props: ISectionProps) {
  return (
    <section class={props.class}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.children}
    </section>
  );
}
