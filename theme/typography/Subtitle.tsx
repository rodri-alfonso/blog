import type { ITypographyProps } from "../types.tsx";

export default function Subtitle(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-xl font-normal",
    medium: "text-2xl font-medium",
    bold: "text-3xl font-bold",
  };
  return (
    <h2 class={VARIANT_STYLE_MAP[props.variant || "normal"]}>{props.text}</h2>
  );
}
