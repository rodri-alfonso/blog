import { asset } from "$fresh/runtime.ts";

export default function Brand() {
  return (
    <a href="/" class="p-1 rounded cursor-pointer hover:bg-gray-200">
      <img src={asset("./brand.svg")} alt="" />
    </a>
  );
}
