import { Link } from "@tanstack/react-router";
import { Phone, Globe } from "lucide-react";

import logo from "@/assets/logo.png";
import { company, footer, nav } from "@/content/site";
import { useT } from "@/lib/language";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-gold/20 bg-card/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={t(company.name)} loading="lazy" width={492} height={328} className="h-14 w-auto object-contain" />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-silver-light">
                {company.name.en}
              </p>
              <p className="text-sm font-bold text-gold" dir="rtl">
                {company.name.ar}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t(company.shortDescription)}
          </p>
          <LanguageSwitcher className="mt-8" />
        </div>

        <div>
          <h2 className="eyebrow">{t(footer.navTitle)}</h2>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-silver/75 transition-colors hover:text-gold-bright"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{t(footer.contactTitle)}</h2>
          <ul className="mt-6 space-y-4 text-sm text-silver/75">
            <li>
              <a href={`tel:${company.phone}`} className="flex items-center gap-3 transition-colors hover:text-gold-bright">
                <Phone className="size-4 text-gold" />
                <span dir="ltr">{company.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://${company.website}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-bright"
              >
                <Globe className="size-4 text-gold" />
                <span dir="ltr">{company.website}</span>
              </a>
            </li>
            <li className="text-muted-foreground">{t(company.country)}</li>
          </ul>
        </div>
      </div>
      <div className="gold-rule h-px opacity-60" />
      <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8">
        <p className="text-xs tracking-wide text-muted-foreground">{t(footer.rights)}</p>
      </div>
    </footer>
  );
}
