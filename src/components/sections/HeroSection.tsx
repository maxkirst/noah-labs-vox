"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { hero } from "@/content/campaign.de";
import { Button } from "@/components/ui/Button";
import { MeshGradientBackground } from "@/components/ui/mesh-gradient-background";
import { staggerContainer, fadeUp, easeOut } from "@/lib/motion";

// Headline auf zwei Zeilen erzwingen ("Ihre Stimme bewegt" / "Herzforschung."),
// statt sich auf text-balance zu verlassen, das den Umbruch je nach
// Spaltenbreite an anderer Stelle setzen könnte.
const headlineWords = hero.headline.split(" ");
const headlineLine2 = headlineWords.pop()!;
const headlineLine1 = headlineWords.join(" ");

// Jede Headline-Zeile schiebt sich einzeln, maskiert in ihrer eigenen Zeile,
// von unten ins Bild – statt beide Zeilen gemeinsam nur einzublenden.
const headlineLineVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.85, ease: easeOut } },
};

/**
 * Hero: Dank, Nutzen und maximale Aufwandsentschädigung sofort sichtbar,
 * passt vollständig in den ersten Desktop-Viewport. Zentrierter, prominenter
 * Text ohne Begleitgrafik.
 */
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
      <MeshGradientBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-16 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-nl-green-900"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={staggerContainer(0.15, 0)}
            className="mx-auto mt-5 font-sans text-[clamp(2.5rem,5.5vw,6rem)] font-bold leading-[1.15] tracking-tight text-nl-ink"
          >
            <span className="-mb-2 block overflow-hidden pb-2">
              <motion.span variants={headlineLineVariant} className="block text-balance">
                {headlineLine1}
              </motion.span>
            </span>
            <span className="-mb-2 block overflow-hidden pb-2">
              <motion.span variants={headlineLineVariant} className="block text-balance">
                {headlineLine2}
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-[46ch] text-pretty text-xl leading-[1.6] text-nl-ink sm:text-2xl"
          >
            {hero.subline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryLink.href} variant="secondary">
              {hero.secondaryLink.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
