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
      <div className="mx-auto flex h-22 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-28">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt={t(company.name)} width={492} height={328} className="h-16 w-auto object-contain lg:h-22" />
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

      {/* Mobile full-screen navigation */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 arabesque bg-background/98 backdrop-blur-xl transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 py-10">
          <nav className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold-bright" }}
                inactiveProps={{ className: "text-silver-light" }}
                className="border-b border-border/60 py-4 text-2xl font-bold tracking-tight"
              >
                <span className="me-4 font-mono text-xs text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4">
            <LanguageSwitcher />
            <GoldLink to="/contact" className="px-5 py-3" >
              {t(ui.contactCta)}
            </GoldLink>
          </div>
        </div>
      </div>
    </header>
  );
}
