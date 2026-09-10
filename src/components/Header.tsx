import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";
import { company, nav, ui } from "@/content/site";
import { useT } from "@/lib/language";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GoldLink } from "@/components/GoldButton";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/25 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-28">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt={t(company.name)} width={492} height={328} className="h-16 w-auto object-contain lg:h-20" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold-bright" }}
              inactiveProps={{ className: "text-silver/75 hover:text-silver-light" }}
              className="relative text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher className="hidden sm:flex" />
          <span className="hidden h-4 w-px bg-border lg:block" aria-hidden />
          <GoldLink to="/contact" className="hidden px-5 py-2.5 lg:inline-flex">
            {t(ui.contactCta)}
          </GoldLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t(ui.close) : t(ui.menu)}
            aria-expanded={open}
            className="text-silver-light transition-colors hover:text-gold lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      <div className={cn("gold-rule h-px transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0")} />

      {/* Mobile / tablet off-canvas drawer (slides in from left) */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-[300px] max-w-[85vw] flex-col border-r border-gold/25 bg-background shadow-[20px_0_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-5">
          <img src={logo} alt={t(company.name)} className="h-12 w-auto object-contain" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t(ui.close)}
            className="text-silver-light transition-colors hover:text-gold"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "border-gold/40 bg-gold/10 text-gold-bright" }}
              inactiveProps={{ className: "border-transparent text-silver-light hover:bg-gold/5" }}
              className="rounded-md border px-4 py-3.5 text-lg font-semibold tracking-tight transition-colors"
            >
              <span className="me-3 font-mono text-xs text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-border/60 px-6 py-6">
          <LanguageSwitcher />
          <GoldLink to="/contact" className="justify-center px-5 py-3" onClick={() => setOpen(false)}>
            {t(ui.contactCta)}
          </GoldLink>
        </div>
      </aside>
    </header>
  );
}
