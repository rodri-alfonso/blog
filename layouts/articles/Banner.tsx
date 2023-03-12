import Headline from "@theme/typography/Headline.tsx";

export default function Banner(props: { title: string }) {
  return (
    <section class="grid gap-8">
      <div class="bg-white w-full rounded-lg h-56" />
      <Headline
        variant="medium"
        text={props.title}
      />
    </section>
  );
}
