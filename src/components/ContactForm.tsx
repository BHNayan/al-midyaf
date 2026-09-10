import * as React from "react";

import { contact } from "@/content/site";
import { useT } from "@/lib/language";
import { GoldButton } from "@/components/GoldButton";

const fieldClass =
  "w-full border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-1 focus:ring-ring";

export function ContactForm() {
  const t = useT();
  const [sent, setSent] = React.useState(false);
  const f = contact.form;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">{t(f.name)}</span>
          <input required name="name" className={`${fieldClass} mt-3`} autoComplete="name" />
        </label>
        <label className="block">
          <span className="eyebrow">{t(f.phone)}</span>
          <input required name="phone" type="tel" dir="ltr" className={`${fieldClass} mt-3`} autoComplete="tel" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">{t(f.email)}</span>
          <input name="email" type="email" dir="ltr" className={`${fieldClass} mt-3`} autoComplete="email" />
        </label>
        <label className="block">
          <span className="eyebrow">{t(f.subject)}</span>
          <input required name="subject" className={`${fieldClass} mt-3`} />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow">{t(f.message)}</span>
        <textarea required name="message" rows={6} className={`${fieldClass} mt-3 resize-none`} />
      </label>
      <div className="flex flex-wrap items-center gap-5 pt-2">
        <GoldButton type="submit">{t(f.submit)}</GoldButton>
        {sent && <p className="text-sm text-gold-bright">{t(f.success)}</p>}
      </div>
    </form>
  );
}
