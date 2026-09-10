import * as React from "react";

export type Lang = "en" | "ar";

const STORAGE_KEY = "mas-lang";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  isAr: boolean;
  setLang: (l: Lang) => void;
};

const LanguageContext = React.createContext<Ctx>({
  lang: "en",
  dir: "ltr",
  isAr: false,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  React.useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = React.useMemo<Ctx>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", isAr: lang === "ar", setLang }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return React.useContext(LanguageContext);
}

/** Pick the localized value from a bilingual record. */
export function useT() {
  const { lang } = useLang();
  return React.useCallback(
    <T,>(pair: { en: T; ar: T }) => pair[lang],
    [lang],
  );
}
