import { JSX } from "preact";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  isActive: boolean;
}

export default function Link(props: LinkProps) {
  const { title, href, isActive, ...rest } = props;

  return (
    <a
      class={"hover:bg-blue-200" +
        (props.isActive ? " bg-blue-400" : "")}
      href={props.href}
      {...rest}
    >
      {props.title}
    </a>
  );
}
