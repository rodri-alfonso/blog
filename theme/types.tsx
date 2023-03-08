export type colorEnum = "gray" | "whitesmoke" | "white" | "current";

export interface ITypographyProps {
  text: string;
  variant?: "normal" | "medium" | "bold";
  color?: "grey" | "primary" | "default" | "contrast" | "current";
  class?: string;
}
