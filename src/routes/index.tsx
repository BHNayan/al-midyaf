import { createFileRoute } from "@tanstack/react-router";

import {
  about,
  company,
  hero,
  images,
  missionVision,
  process,
  services,
  ui,
  whyUs,
} from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { GoldLink } from "@/components/GoldButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Midyaf Al-Shamil | Advertising, Publicity & Rental Services" },
      {
        name: "description",
        content:
          "Advertising, publicity and rental solutions from Al-Midyaf Al-Shamil, a Saudi business helping brands reach the right audience.",
      },
      { property: "og:title", content: "Al-Midyaf Al-Shamil | Advertising, Publicity & Rental" },
      {
        property: "og:description",
        content: "Your brand. Everywhere. Advertising, publicity and rental services in Saudi Arabia.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const t = useT();
  const { isAr } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt={
              isAr
                ? "لوحة إعلانية فاخرة أمام أفق مدينة الرياض ليلاً"
                : "Premium billboard on a palm-lined boulevard against the Riyadh skyline at night"
            }
            width={1920}
            height={1088}
            className="size-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-e from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute inset-0 arabesque opacity-50" aria-hidden />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-center px-5 pb-20 pt-36 sm:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="gold-rule h-px w-16" />
              <span className="eyebrow">{t(hero.eyebrow)}</span>
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-silver-light">{t(hero.titleLine1)}</span>
              <span className="block text-gold-gradient">{t(hero.titleLine2)}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t(hero.subtitle)}
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <GoldLink to="/services">{t(ui.exploreCta)}</GoldLink>
              <GoldLink to="/contact" variant="outline">
                {t(ui.contactCta)}
              </GoldLink>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="border-t border-gold/15 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-gold/25" aria-hidden />
            <img
              src={images.about}
              alt={
                isAr
                  ? "مكتب سعودي فاخر مع مشربية ذهبية وإطلالة على الأفق"
                  : "Luxury Saudi office interior with a gold-lit geometric screen and skyline view"
              }
              loading="lazy"
              width={1280}
              height={1600}
              className="relative aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="lg:ps-6">
            <SectionHeading
              number="01"
              eyebrow={isAr ? "المنشأة" : "The Company"}
              title={t(about.title)}
            />
            <Reveal delay={120}>
              <div className="mt-8 border-s-2 border-gold/70 ps-6">
                <p className="text-base leading-relaxed text-silver/80 sm:text-lg">
                  {t(about.intro)}
                </p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.24em] text-gold">
                {t(company.activity)}
              </p>
              <div className="mt-10">
                <GoldLink to="/about" variant="outline">
                  {isAr ? "المزيد عن المنشأة" : "More About Us"}
                </GoldLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow={isAr ? "ما نقدمه" : "What We Do"}
            title={isAr ? "خدماتنا" : "OUR SERVICES"}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="border-t border-gold/15 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow={isAr ? "توجهنا" : "Our Direction"}
            title={isAr ? "الرسالة والرؤية والقيم" : "MISSION, VISION & VALUES"}
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[missionVision.mission, missionVision.vision].map((block, i) => (
              <Reveal key={block.label.en} delay={i * 90}>
                <article className="h-full border border-border bg-card/50 p-9 transition-colors duration-500 hover:border-gold/60">
                  <span className="eyebrow">{t(block.label)}</span>
                  <span className="gold-rule mt-5 block h-px w-14" />
                  <p className="mt-6 text-base leading-relaxed text-silver/80">{t(block.body)}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <article className="h-full border border-border bg-card/50 p-9 transition-colors duration-500 hover:border-gold/60">
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

      {/* PROCESS */}
      <section className="relative border-t border-gold/15 bg-card/25 py-20 lg:py-28">
        <div className="absolute inset-0 arabesque opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            number="04"
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

      {/* WHY US TEASER */}
      <section className="border-t border-gold/15 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            number="05"
            eyebrow={isAr ? "الفارق" : "The Difference"}
            title={t(whyUs.title)}
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.items.slice(0, 3).map((item, i) => (
              <Reveal key={item.title.en} delay={i * 90}>
                <h3 className="text-lg font-bold tracking-tight text-gold-bright">
                  {t(item.title)}
                </h3>
                <span className="gold-rule mt-4 block h-px w-12" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(item.body)}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <GoldLink to="/why-us" variant="outline">
              {isAr ? "لماذا المضيف الشامل" : "Why Al-Midyaf Al-Shamil"}
            </GoldLink>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
