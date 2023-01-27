import type { ITypographyProps } from "../types.tsx";

export default function Body(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-base font-normal",
    medium: "text-base font-medium",
    bold: "text-lg font-bold",
  };

  return (
    <p class={VARIANT_STYLE_MAP[props.variant || "normal"]}>{props.text}</p>
  );
}
