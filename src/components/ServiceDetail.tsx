import { serviceVisualNote, rentalPlaceholderNote, services, type Service } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export function ServiceDetail({ slug }: { slug: Service["slug"] }) {
  const t = useT();
  const { isAr } = useLang();
  const service = services.find((s) => s.slug === slug)!;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`${service.number} — ${isAr ? "خدمة" : "Service"}`}
        title={t(service.title)}
        subtitle={t(service.description)}
        image={service.image}
        imageAlt={t(service.title)}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-gold/25" aria-hidden />
            <img
              src={service.image}
              alt={t(service.title)}
              loading="lazy"
              width={1280}
              height={900}
              className="relative aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              number={service.number}
              eyebrow={isAr ? "نطاق العمل" : "Scope"}
              title={isAr ? "ما يشمله هذا المجال" : "WHAT THIS COVERS"}
            />
            <Reveal delay={100}>
              <ul className="mt-10 grid gap-px border border-border bg-border">
                {service.highlights.map((h) => (
                  <li
                    key={h.en}
                    className="flex items-center gap-4 bg-background px-6 py-5 text-silver/85 transition-colors hover:bg-card"
                  >
                    <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
                    {t(h)}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-s-2 border-gold/50 ps-5 text-sm leading-relaxed text-muted-foreground">
                {t(slug === "rental" ? rentalPlaceholderNote : serviceVisualNote)}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={isAr ? "خدمات أخرى" : "Other Services"}
            title={isAr ? "استكشف المزيد" : "EXPLORE MORE"}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {others.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
