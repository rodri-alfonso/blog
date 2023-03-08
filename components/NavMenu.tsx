import Link from "./Link.tsx";
import { HEADER_LINKS } from "@config/configuration.ts";

export default function Header({ currentPath }: { currentPath: string }) {
  return (
    <nav class="flex gap-8 p-2 mr-4">
      {HEADER_LINKS.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          title={link.title}
          isActive={link.href === currentPath}
        />
      ))}
    </nav>
  );
}
