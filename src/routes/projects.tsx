import { createFileRoute } from "@tanstack/react-router";

import { images, portfolio } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Portfolio Showcase | Al-Midyaf Al-Shamil" },
      {
        name: "description",
        content:
          "Portfolio categories representing the advertising, publicity and rental work undertaken by Al-Midyaf Al-Shamil.",
      },
      { property: "og:title", content: "Portfolio Showcase | Al-Midyaf Al-Shamil" },
      {
        property: "og:description",
        content: "Advertising campaigns, outdoor advertising, brand promotion and rental solutions.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const t = useT();
  const { isAr } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isAr ? "معرض الأعمال" : "Portfolio Showcase"}
        title={t(portfolio.title)}
        subtitle={t(portfolio.note)}
        image={images.hero}
        imageAlt={isAr ? "إعلان خارجي في مدينة سعودية" : "Outdoor advertising in a Saudi city"}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.items.map((item, i) => (
              <Reveal key={item.category.en} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden border border-border bg-card/50 transition-colors duration-500 hover:border-gold/60">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.category)}
                      loading="lazy"
                      width={1280}
                      height={900}
                      className="size-full object-cover opacity-60 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  </div>
                  <div className="p-7">
                    <span className="eyebrow">
                      {isAr ? "فئة" : "Category"} · {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 text-xl font-bold tracking-tight text-silver-light transition-colors group-hover:text-gold-bright">
                      {t(item.category)}
                    </h2>
                    <span className="gold-rule mt-4 block h-px w-12" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {t(item.body)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
