interface IDateProps {
  date: Date;
  locale?: "es" | "en";
  class?: string;
  variant?: "normal" | "medium" | "bold";
}

export default function Date(props: IDateProps) {
  const { date, locale = "es", class: className } = props;

  return (
    <time class={className}>
      {Intl.DateTimeFormat(locale).format(date)}
    </time>
  );
}
