import Headline from "@theme/typography/Headline.tsx";
import Subtitle from "@theme/typography/Subtitle.tsx";
import Body from "@theme/typography/Body.tsx";
import Caption from "@theme/typography/Caption.tsx";
import Overline from "@theme/typography/Overline.tsx";
import Page from "@layouts/Page.tsx";

export default function TypographyPage() {
  return (
    <Page title="typography" path="/typography">
      <div class="grid gap-8">
        <div class="grid">
          <Headline text="Headline bold" variant="bold" />
          <Headline text="Headline medium" variant="medium" />
          <Headline text="Headline normal" variant="normal" />
        </div>

        <div class="grid gap-2">
          <Subtitle text="Subtitle bold" variant="bold" />
          <Subtitle text="Subtitle medium" variant="medium" />
          <Subtitle text="Subtitle normal" variant="normal" />
        </div>

        <div class="grid gap-2">
          <Body text="Body bold" variant="bold" />
          <Body text="Body medium" variant="medium" />
          <Body text="Body normal" variant="normal" />
        </div>

        <div class="grid gap-2">
          <Caption text="Caption bold" variant="bold" />
          <Caption text="Caption medium" variant="medium" />
          <Caption text="Caption normal" variant="normal" />
        </div>

        <div class="grid gap-2">
          <Overline text="Overline bold" variant="bold" />
          <Overline text="Overline medium" variant="medium" />
          <Overline text="Overline normal" variant="normal" />
        </div>
      </div>
    </Page>
  );
}
