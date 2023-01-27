import type { ITypographyProps } from "../types.tsx";

export default function Headline(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-4xl font-normal",
    medium: "text-5xl font-medium",
    bold: "text-6xl font-bold",
  };

  return (
    <h1 class={VARIANT_STYLE_MAP[props.variant || "normal"]}>{props.text}</h1>
  );
}
