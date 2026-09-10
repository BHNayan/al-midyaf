import { createFileRoute } from "@tanstack/react-router";

import { about, company, images, missionVision } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        name: "description",
        content:
          "Al-Midyaf Al-Shamil is a Saudi business operating in advertising, publicity and rental services.",
      },
      { property: "og:title", content: "About Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        property: "og:description",
        content: "Our direction, values and approach to advertising, publicity and rental services.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const { isAr } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isAr ? "من نحن" : "About"}
        title={t(about.title)}
        subtitle={t(about.intro)}
        image={images.about}
        imageAlt={isAr ? "مكتب سعودي فاخر" : "Luxury Saudi office interior"}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-gold/25" aria-hidden />
            <img
              src={images.about}
              alt={isAr ? "بيئة عمل احترافية" : "Professional working environment"}
              loading="lazy"
              width={1280}
              height={1600}
              className="relative aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              number="01"
              eyebrow={isAr ? "النشاط" : "Activity"}
              title={t(about.activityTitle)}
            />
            <Reveal delay={100}>
              <p className="mt-8 text-lg font-semibold tracking-[0.06em] text-gold">
                {t(company.activity)}
              </p>

              <div className="mt-12 space-y-10">
                {[about.direction, about.approach].map((block, i) => (
                  <div key={block.title.en} className="border-s-2 border-gold/60 ps-6">
                    <span className="font-mono text-xs tracking-[0.3em] text-gold/70">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-silver-light">
                      {t(block.title)}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{t(block.body)}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            number="04"
            eyebrow={isAr ? "مبادئنا" : "Principles"}
            title={isAr ? "الرسالة والرؤية والقيم" : "MISSION, VISION & VALUES"}
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[missionVision.mission, missionVision.vision].map((block, i) => (
              <Reveal key={block.label.en} delay={i * 90}>
                <article className="h-full border border-border bg-background p-9 transition-colors duration-500 hover:border-gold/60">
                  <span className="eyebrow">{t(block.label)}</span>
                  <span className="gold-rule mt-5 block h-px w-14" />
                  <p className="mt-6 leading-relaxed text-silver/80">{t(block.body)}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <article className="h-full border border-border bg-background p-9 transition-colors duration-500 hover:border-gold/60">
                <span className="eyebrow">{t(missionVision.values.label)}</span>
                <span className="gold-rule mt-5 block h-px w-14" />
                <ul className="mt-6 space-y-3">
                  {missionVision.values.items.map((v) => (
                    <li key={v.en} className="flex items-center gap-3 text-silver/80">
                      <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
                      {t(v)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
