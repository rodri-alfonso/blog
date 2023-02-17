import { HEADER_LINKS } from "../config.ts";
import { JSX } from "preact";
import Body from "../theme/typography/Body.tsx";
import ThemeSwitcher from "../islands/ThemeSwitcher.tsx";
import Avatar from "../icons/Avatar.tsx";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  isActive: boolean;
}

export default function Header({ currentPath }: { currentPath: string }) {
  function Link(props: LinkProps) {
    const { title, href, isActive, ...rest } = props;

    return (
      <a
        class={"py-1 px-2.5 rounded-lg text-gray-400 hover:text-gray-900 active:scale-95 transition-all " +
          (props.isActive ? " text-gray-900 bg-gray-200 " : "")}
        href={props.href}
        {...rest}
      >
        <Body text={props.title} variant="medium" />
      </a>
    );
  }

  return (
    <header class="flex justify-between items-center">
      <Avatar width={40} height={40} background="bg-gray-100" />
      <nav class="flex gap-4">
        {HEADER_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            title={link.title}
            isActive={link.href === currentPath}
          />
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
