import { createFileRoute } from "@tanstack/react-router";
import { Phone, Globe, Mail, MapPin, Building2, Flag } from "lucide-react";

import logo from "@/assets/logo.png";
import { company, contact } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        name: "description",
        content:
          "Contact Al-Midyaf Al-Shamil for advertising, publicity and rental services in Saudi Arabia. Phone 0555199480.",
      },
      { property: "og:title", content: "Contact Al-Midyaf Al-Shamil | Saudi Arabia" },
      {
        property: "og:description",
        content: "Get in touch about a project, campaign or business requirement.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Al-Midyaf Al-Shamil",
          alternateName: "المضيف الشامل",
          telephone: "0555199480",
          url: "https://almudyaf.net",
          address: { "@type": "PostalAddress", addressCountry: "SA" },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const { isAr } = useLang();
  const l = contact.labels;

  const details = [
    { icon: Building2, label: t(l.company), value: `${company.name.en} — ${company.name.ar}` },
    { icon: Phone, label: t(l.phone), value: company.phone, href: `tel:${company.phone}`, ltr: true },
    {
      icon: Globe,
      label: t(l.website),
      value: company.website,
      href: `https://${company.website}`,
      ltr: true,
    },
    { icon: Mail, label: t(l.email), value: company.email },
    { icon: MapPin, label: t(l.address), value: t(company.address) },
    { icon: Flag, label: t(l.country), value: t(company.country) },
  ];

  return (
    <>
      <PageHero
        eyebrow={isAr ? "لنتحدث" : "Let's Talk"}
        title={t(contact.title)}
        subtitle={t(contact.intro)}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="border border-border bg-card/50 p-8 sm:p-10">
              <img
                src={logo}
                alt={t(company.name)}
                loading="lazy"
                width={492}
                height={328}
                className="h-20 w-auto object-contain"
              />
              <span className="gold-rule mt-7 block h-px w-16" />
              <ul className="mt-8 space-y-7">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <d.icon className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                    <div>
                      <p className="eyebrow">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          dir={d.ltr ? "ltr" : undefined}
                          className="mt-1 block text-silver-light transition-colors hover:text-gold-bright"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-silver-light">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
