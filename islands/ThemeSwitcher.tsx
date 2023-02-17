import Moon from "../icons/Moon.tsx";
import Sun from "../icons/Sun.tsx";
import { useState } from "preact/hooks";

export default function ThemeSwitcher() {
  const [isLight, setIsLight] = useState(false);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      class="active:scale-95 transition-all p-1 hover:bg-gray-100 focus:border-gray-400 text-gray-400 rounded-md hover:text-gray-800 focus:outline-none  "
    >
      {isLight ? <Sun /> : <Moon />}
    </button>
  );
}
