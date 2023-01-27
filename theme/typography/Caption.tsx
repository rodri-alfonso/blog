import type { ITypographyProps } from "../types.tsx";

export default function Caption(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-sm font-normal",
    medium: "text-sm font-medium",
    bold: "text-sm font-bold",
  };
  return (
    <p class={VARIANT_STYLE_MAP[props.variant || "normal"]}>{props.text}</p>
  );
}
