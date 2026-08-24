"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/content/campaign.de";

/**
 * Kampagnen-Navigation: eine Zeile, max. 72px hoch, vier Ankerlinks plus
 * CTA. Mobile Menü mit Fokusfalle, schließt bei Linkwahl und mit Escape.
 * Bewusst auf diese Kampagne begrenzt, keine vollständige Firmen-Navigation.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 h-[72px] border-b border-nl-sage-300/50 bg-nl-surface/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="https://www.noah-labs.com/de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center text-nl-green-900"
          aria-label={`${nav.logoAlt} (öffnet in neuem Tab)`}
        >
          <Logo />
        </a>

        <nav aria-label="Kampagnennavigation" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-1" onPointerLeave={() => setHoveredHref(null)}>
            {nav.links.map((link) => (
              <li key={link.href} className="relative">
                {hoveredHref === link.href && (
                  <motion.span
                    layoutId="nav-hover-highlight"
                    className="absolute inset-0 rounded-full bg-nl-sage-300/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32, bounce: 0 }
                    }
                  />
                )}
                <a
                  href={link.href}
                  onPointerEnter={() => setHoveredHref(link.href)}
                  onFocus={() => setHoveredHref(link.href)}
                  onBlur={() => setHoveredHref(null)}
                  className="relative z-10 inline-flex min-h-[44px] items-center rounded-full px-4 text-base font-medium text-nl-ink transition-colors hover:text-nl-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nl-green-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={nav.cta.href}>{nav.cta.label}</Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-nl-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nl-green-900 md:hidden"
          aria-label={nav.menuOpenLabel}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <List size={26} weight="regular" />
        </button>
      </div>
      </header>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigationsmenü"
          className="fixed inset-0 z-50 flex flex-col bg-nl-surface md:hidden"
        >
          <div className="flex h-[72px] items-center justify-between px-5 sm:px-6">
            <span className="text-nl-green-900">
              <Logo />
            </span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full text-nl-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nl-green-900"
              aria-label={nav.menuCloseLabel}
            >
              <X size={26} weight="regular" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-2 px-6 py-6">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-4 text-xl font-medium text-nl-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nl-green-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-8">
            <Button href={nav.cta.href} onClick={() => setOpen(false)} className="w-full">
              {nav.cta.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
