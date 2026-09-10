import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/15">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="size-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
      )}
      <div className="absolute inset-0 arabesque opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-36 sm:px-8 lg:pb-24 lg:pt-48">
        <Reveal>
          {eyebrow && (
            <div className="mb-6 flex items-center gap-4">
              <span className="gold-rule h-px w-12" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}
          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
