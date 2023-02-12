import type { ITypographyProps } from "../types.tsx";

export default function Subtitle(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-xl font-normal",
    medium: "text-2xl font-medium",
    bold: "text-3xl font-bold",
  };

  const COLORS_MAP = {
    contrast: "text-white",
    grey: "text-gray-200",
    primary: "text-blue-500",
    default: "text-black",
  };

  const className = VARIANT_STYLE_MAP[props.variant || "normal"] + " " +
    COLORS_MAP[props.color || "default"];

  return (
    <h2 class={className}>
      {props.text}
    </h2>
  );
}
