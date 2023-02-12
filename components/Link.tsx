import { JSX } from "preact";
import Body from "../theme/typography/Body.tsx";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  isActive: boolean;
}

export default function Link(props: LinkProps) {
  const { title, href, isActive, ...rest } = props;

  return (
    <a
      class={"py-1 px-1.5 lowercase text-black hover:border-b-4 hover:border-gray-300 active:scale-95 transition-all " +
        (props.isActive ? " border-b-4 border-black hover:border-black " : "")}
      href={props.href}
      {...rest}
    >
      <Body text={props.title} variant="bold" />
    </a>
  );
}
