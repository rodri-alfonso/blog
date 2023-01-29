import { IIconProps } from "./types.ts";

export default function Pinned(props: IIconProps) {
  return (
    <svg
      width={props.width ?? 44}
      height={props.height ?? 44}
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
      stroke-width="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 4v6l-2 4v2h10v-2l-2-4V4M12 16v5M8 4h8" />
    </svg>
  );
}
