import Subtitle from "@theme/typography/Subtitle.tsx";
import { asset } from "$fresh/runtime.ts";
import Body from "@theme/typography/Body.tsx";

export default function Hero() {
  return (
    <section class="bg-black w-full rounded-2xl h-36 flex items-center gap-10 px-4">
      <div class="w-36 h-full relative">
        <img
          src={asset("./avatar-torso.svg")}
          class="absolute bottom-0 left-1"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Subtitle
          color="grey"
          variant="bold"
          text="Welcome to my dashboard!"
        />
        <Body
          color="contrast"
          text="I write about UI architecture, design systems, typographies, CSS, and web performance."
        />
      </div>
    </section>
  );
}
