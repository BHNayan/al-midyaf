import { createFileRoute } from "@tanstack/react-router";

import { images, process, services } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Advertising, Publicity & Rental Services | Al-Midyaf Al-Shamil" },
      {
        name: "description",
        content:
          "Advertising, publicity and promotion, and rental services delivered with a practical, professional approach.",
      },
      { property: "og:title", content: "Our Services | Al-Midyaf Al-Shamil" },
      {
        property: "og:description",
        content: "Advertising, publicity and promotion, and rental services in Saudi Arabia.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const { isAr } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isAr ? "ما نقدمه" : "What We Do"}
        title={isAr ? "خدماتنا" : "OUR SERVICES"}
        subtitle={
          isAr
            ? "ثلاثة مجالات أساسية نعمل من خلالها: الإعلان، الدعاية والترويج، وخدمات التأجير."
            : "Three core areas of work: advertising, publicity and promotion, and rental services."
        }
        image={images.advertising}
        imageAlt={isAr ? "لوحة إعلانية على طريق سريع" : "Outdoor billboard on a highway"}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={isAr ? "منهجيتنا" : "Our Method"}
            title={t(process.title)}
          />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="group h-full bg-background p-9 transition-colors duration-500 hover:bg-card">
                  <span className="font-mono text-3xl font-bold text-gold/50 transition-colors group-hover:text-gold">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-silver-light">
                    {t(step.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(step.body)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
