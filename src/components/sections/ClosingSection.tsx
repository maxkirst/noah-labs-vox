"use client";

import { motion, useReducedMotion } from "motion/react";
import { closing } from "@/content/campaign.de";
import { AmbientOrb } from "@/components/ui/ambient-orb";
import { staggerContainer, fadeUp } from "@/lib/motion";

/**
 * Abschnitt 8 (Teil 1): Abschluss – ruhige Grußbotschaft statt Kennzahlen.
 * Orb, Headline und Signatur blenden gestaffelt ein (ein gemeinsamer
 * Scroll-Trigger, keine verschachtelten Viewport-Beobachter).
 */
export function ClosingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-nl-taupe-200/40 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          variants={staggerContainer(0.18, 0)}
          className="mx-auto flex max-w-[900px] flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="h-28 w-28 sm:h-32 sm:w-32">
            <AmbientOrb rotationSpeed={0.1} />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-balance font-sans text-[clamp(2.75rem,5vw,5.25rem)] font-bold leading-[1.15] tracking-tight text-nl-ink"
          >
            {closing.heading}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-7 font-serif text-2xl italic text-nl-green-900">
            {closing.signature}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
