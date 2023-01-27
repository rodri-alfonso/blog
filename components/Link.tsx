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
      class={"py-1 px-2.5 rounded-2xl hover:bg-gray-200" +
        (props.isActive ? " bg-gray-700 text-gray-100 hover:bg-gray-700" : "")}
      href={props.href}
      {...rest}
    >
      <Body text={props.title} variant="medium" />
    </a>
  );
}
