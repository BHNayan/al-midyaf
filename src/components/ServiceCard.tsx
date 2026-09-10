import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";

import type { Service } from "@/content/site";
import { ui } from "@/content/site";
import { useLang, useT } from "@/lib/language";
import { Reveal } from "@/components/Reveal";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const t = useT();
  const { isAr } = useLang();
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <Reveal delay={delay}>
      <Link
        to={service.to}
        className="group relative block h-full overflow-hidden border border-border bg-card/50 transition-colors duration-500 hover:border-gold/60"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={t(service.title)}
            loading="lazy"
            width={1280}
            height={900}
            className="size-full object-cover opacity-60 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <span className="absolute bottom-4 start-6 font-mono text-4xl font-bold text-gold/70">
            {service.number}
          </span>
        </div>
        <div className="p-7">
          <h3 className="text-xl font-bold tracking-tight text-silver-light transition-colors group-hover:text-gold-bright">
            {t(service.title)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(service.short)}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
            {t(ui.readMore)}
            <Arrow className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
