import { createFileRoute } from "@tanstack/react-router";

import { images, process, whyUs } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        name: "description",
        content:
          "A professional approach, practical solutions, client focus and reliable support across advertising, publicity and rental services.",
      },
      { property: "og:title", content: "Why Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        property: "og:description",
        content: "How we work and what clients can expect from us.",
      },
      { property: "og:url", content: "/why-us" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  const t = useT();
  const { isAr } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isAr ? "الفارق" : "The Difference"}
        title={t(whyUs.title)}
        subtitle={
          isAr
            ? "نعمل بطريقة واضحة ومنظمة، ونقيس نجاحنا بمدى ملاءمة الخدمة لاحتياج العميل."
            : "We work in a clear, organised way and measure success by how well the service fits the requirement."
        }
        image={images.publicity}
        imageAlt={isAr ? "عرض ترويجي فاخر" : "Premium promotional display"}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.items.map((item, i) => (
              <Reveal key={item.title.en} delay={(i % 3) * 90}>
                <article className="group h-full bg-background p-9 transition-colors duration-500 hover:bg-card">
                  <span className="font-mono text-xs tracking-[0.3em] text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-xl font-bold tracking-tight text-silver-light transition-colors group-hover:text-gold-bright">
                    {t(item.title)}
                  </h2>
                  <span className="gold-rule mt-4 block h-px w-12" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t(item.body)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={isAr ? "منهجيتنا" : "Our Method"}
            title={t(process.title)}
            align="center"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80} className="border-t border-gold/40 pt-6">
                <span className="font-mono text-2xl font-bold text-gold">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-silver-light">
                  {t(step.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(step.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
