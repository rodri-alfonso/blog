import Moon from "../icons/Moon.tsx";
import Sun from "../icons/Sun.tsx";
import { useMode } from "../hooks/useMode.ts";

export default function ModeSwitcher() {
  const { isLight, changeMode } = useMode();

  return (
    <button
      onClick={changeMode}
      class="active:scale-95 transition-all p-1 hover:bg-gray-100 focus:border-gray-400 text-gray-400 rounded-md hover:text-gray-800 focus:outline-none  "
    >
      {isLight ? <Moon /> : <Sun />}
    </button>
  );
}
