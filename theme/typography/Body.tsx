import type { ITypographyProps } from "../types.tsx";

export default function Body(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-base font-normal",
    medium: "text-base font-medium",
    bold: "text-lg font-bold",
  };

  const COLOR_STYLE_MAP = {
    grey: "text-gray-500",
    primary: "text-blue-700",
    default: "text-current",
  };

  return (
    <p
      class={`${VARIANT_STYLE_MAP[props.variant || "normal"]} ${
        COLOR_STYLE_MAP[props.color || "default"]
      }`}
    >
      {props.text}
    </p>
  );
}
