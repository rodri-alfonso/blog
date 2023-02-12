import type { ITypographyProps } from "../types.tsx";

export default function Body(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-base font-normal",
    medium: "text-base font-medium",
    bold: "text-lg font-bold",
  };

  const COLORS_STYLE_MAP = {
    contrast: "text-white",
    grey: "text-gray-500",
    primary: "text-blue-500",
    default: "text-current",
  };

  const className = VARIANT_STYLE_MAP[props.variant || "normal"] + " " +
    COLORS_STYLE_MAP[props.color || "default"];

  return (
    <p
      class={className}
    >
      {props.text}
    </p>
  );
}
