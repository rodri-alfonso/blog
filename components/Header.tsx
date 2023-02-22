import { HEADER_LINKS } from "../config.ts";
import { JSX } from "preact";
import Body from "../theme/typography/Body.tsx";
import ModeSwitcher from "../islands/ModeSwitcher.tsx";
import Avatar from "../icons/Avatar.tsx";
import { apply, css } from "twind/css";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  isActive: boolean;
}

export default function Header({ currentPath }: { currentPath: string }) {
  function Link(props: LinkProps) {
    const { title, href, isActive, ...rest } = props;

    return (
      <a
        class={"py-1 px-2.5 rounded-lg text-gray-400 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-900 active:scale-95 transition-all " +
          (props.isActive
            ? " text-gray-900 dark:text-gray-300 bg-gray-200 dark:bg-gray-600"
            : "")}
        href={props.href}
        {...rest}
      >
        <Body text={props.title} color="current" variant="medium" />
      </a>
    );
  }

  return (
    <header
      class={className}
    >
      <Avatar size={32} background="bg-gray-100" />
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
      <ModeSwitcher />
    </header>
  );
}

const header_css = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  padding: "10px",
  background: "rgba(255, 255, 255, 0.77)",
  backdropFilter: "blur(7.9px)",
  zIndex: 1,
});

const className = apply`
${header_css}
dark:bg-black
dark:bg-opacity-30
` as any;
