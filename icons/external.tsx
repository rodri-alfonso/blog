import { IIconProps } from "./types.ts";

export default function External(props: IIconProps) {
  return (
    <svg
      width={props.width ?? 44}
      height={props.height ?? 44}
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M10 14 20 4M15 4h5v5" />
    </svg>
  );
}
