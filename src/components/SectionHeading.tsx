type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className={`font-display font-bold uppercase leading-[0.95] tracking-tight text-ink ${
          eyebrow ? "mt-3" : ""
        } text-4xl md:text-5xl lg:text-6xl`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
