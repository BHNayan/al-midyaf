import { cta, ui } from "@/content/site";
import { useT } from "@/lib/language";
import { GoldLink } from "@/components/GoldButton";
import { Reveal } from "@/components/Reveal";

export function CTASection() {
  const t = useT();

  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-card/30">
      <div className="absolute inset-0 arabesque opacity-70" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 mx-auto h-64 max-w-3xl rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t(cta.title)}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t(cta.body)}
          </p>
          <div className="mt-10 flex justify-center">
            <GoldLink to="/contact">{t(ui.contactCta)}</GoldLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
