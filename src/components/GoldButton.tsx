import { Link, type LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300";

const variants = {
  gold: "bg-gold text-primary-foreground hover:bg-gold-bright hover:shadow-[0_0_36px_-6px_var(--gold)]",
  outline:
    "border border-gold/45 text-silver-light hover:border-gold hover:text-gold-bright hover:bg-gold/8",
  ghost: "text-silver hover:text-gold-bright",
} as const;

type Variant = keyof typeof variants;

export function GoldLink({
  to,
  children,
  variant = "gold",
  className,
}: {
  to: LinkProps["to"];
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function GoldButton({
  children,
  variant = "gold",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
