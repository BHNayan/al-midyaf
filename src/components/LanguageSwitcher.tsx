import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn("flex items-center gap-2 text-xs tracking-[0.16em]", className)}
      role="group"
      aria-label="Language / اللغة"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "px-1 py-0.5 font-semibold uppercase transition-colors",
          lang === "en" ? "text-gold-bright" : "text-muted-foreground hover:text-silver",
        )}
      >
        EN
      </button>
      <span className="h-3 w-px bg-border" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          "px-1 py-0.5 font-semibold transition-colors",
          lang === "ar" ? "text-gold-bright" : "text-muted-foreground hover:text-silver",
        )}
      >
        العربية
      </button>
    </div>
  );
}
