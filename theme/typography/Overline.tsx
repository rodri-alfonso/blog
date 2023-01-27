import type { ITypographyProps } from "../types.tsx";

export default function Overline(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-xs font-normal",
    medium: "text-xs font-medium",
    bold: "text-xs font-bold",
  };
  return (
    <span class={VARIANT_STYLE_MAP[props.variant || "normal"]}>
      {props.text}
    </span>
  );
}
