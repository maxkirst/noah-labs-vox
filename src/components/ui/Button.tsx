import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const base =
  "inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full px-6 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nl-green-900";

const variants = {
  primary: "bg-nl-green-900 text-white hover:bg-nl-green-800",
  secondary: "text-nl-green-900 underline underline-offset-4 hover:text-nl-green-800",
};

/**
 * Einheitlicher CTA-Button (volle Pill-Form) bzw. Textlink. Externe Links
 * (http/https) öffnen automatisch in einem neuen Tab (target/rel) und
 * bekommen einen Screenreader-Hinweis darauf ergänzt.
 */
export function Button({ href, children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {children}
      {isExternal && <span className="sr-only"> (öffnet in neuem Tab)</span>}
    </Link>
  );
}
