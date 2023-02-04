import Subtitle from "../theme/typography/Subtitle.tsx";
import { asset } from "$fresh/runtime.ts";
import Body from "../theme/typography/Body.tsx";

export default function Hero() {
  return (
    <section class="bg-black w-full rounded-3xl h-36 mb-8 flex gap-10 pt-4 px-4">
      <div class="w-36 h-full relative">
        <img
          src={asset("./avatar-torso.svg")}
          class="absolute bottom-0 left-1"
        />
      </div>
      <div class="flex flex-col gap-4">
        <Subtitle
          color="grey"
          variant="bold"
          text="Hello! I'm Rodri"
        />
        <Body
          color="contrast"
          text="Welcome to my dashboard! I write about UI architecture, design systems, CSS and web performance"
        />
      </div>
    </section>
  );
}
