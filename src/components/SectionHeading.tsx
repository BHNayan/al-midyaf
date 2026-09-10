import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  align = "start",
  as: Tag = "h2",
  className,
}: {
  number?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(number || eyebrow) && (
        <div
          className={cn(
            "mb-5 flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          {number && (
            <span className="font-mono text-xs tracking-[0.3em] text-gold">{number}</span>
          )}
          <span className="gold-rule h-px w-12 opacity-70" />
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <Tag className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
