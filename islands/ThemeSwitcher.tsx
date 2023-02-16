import Moon from "../icons/Moon.tsx";
import Sun from "../icons/Sun.tsx";
import { useState } from "preact/hooks";

export default function ThemeSwitcher() {
  const [isLight, setIsLight] = useState(false);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      class="active:scale-95 transition-all focus:border-gray-400"
    >
      {isLight ? <Sun /> : <Moon />}
    </button>
  );
}
