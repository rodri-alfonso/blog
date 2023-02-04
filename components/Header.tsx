import Link from "./Link.tsx";
import { HEADER_LINKS } from "../config.ts";

export default function Header({ currentPath }: { currentPath: string }) {
  return (
    <header class="flex justify-between items-center">
      <nav class="flex gap-8">
        {HEADER_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            title={link.title}
            isActive={link.href === currentPath}
          />
        ))}
      </nav>
      <div class="w-5 h-5 bg-gray-700 rounded" />
    </header>
  );
}
