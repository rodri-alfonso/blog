import type { ITypographyProps } from "../types.tsx";
import { apply } from "twind/css";

export default function Body(props: ITypographyProps) {
  const VARIANT_STYLE_MAP = {
    normal: "text-base font-normal",
    medium: "text-base font-medium",
    bold: "text-lg font-bold",
  };

  const COLORS_STYLE_MAP = {
    contrast: "text-white dark:text-black",
    grey: "text-gray-200 dark:text-gray-800",
    primary: "text-blue-500",
    default: "text-black dark:text-gray-50",
    current: "text-current",
  };

  const variantStyles = VARIANT_STYLE_MAP[props.variant || "normal"];
  const colorStyles = COLORS_STYLE_MAP[props.color || "default"];

  const className = [variantStyles, colorStyles, props.class].join(" ");

  return <p class={className}>{props.text}</p>;
}
