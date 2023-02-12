interface IDateProps {
  date: Date;
  locale?: "es" | "en";
  class?: string;
  variant?: "normal" | "medium" | "bold";
}

export default function Date(props: IDateProps) {
  const { date, locale = "es", variant, class: className } = props;

  const VARIANT_STYLE_MAP = {
    normal: "text-sm font-normal",
    medium: "text-sm font-medium",
    bold: "text-sm font-bold",
  };

  return (
    <time class={`${VARIANT_STYLE_MAP[variant || "normal"]} ${className}`}>
      {Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date)}
    </time>
  );
}
