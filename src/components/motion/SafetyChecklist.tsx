"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { safety } from "@/content/campaign.de";
import { staggerContainer, fadeUpSmall } from "@/lib/motion";

// Der weiße Kreis füllt sich mit Spring-Überschwingen, der Haken poppt kurz
// danach nach – wie ein echtes "Checkbox wird angehakt"-Gefühl. Der Ring
// selbst bleibt statisch sichtbar (kein separates Reveal nötig).
const checkFill: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 20, delay: 0.15 },
  },
};

/**
 * Checkliste der fünf verbindlichen Aussagen aus Abschnitt 6 des Briefings.
 * Jede Zeile blendet beim Scrollen gestaffelt ein, der Haken-Kreis füllt
 * sich kurz danach – einmalig, keine Endlosschleife.
 */
export function SafetyChecklist() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={staggerContainer(0.15, 0)}
      className="mx-auto flex max-w-[900px] flex-col gap-6"
    >
      {safety.statements.map((statement) => (
        <motion.li key={statement} variants={fadeUpSmall} className="flex items-center gap-5">
          <span
            aria-hidden="true"
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-2 ring-white/40"
          >
            <motion.span
              variants={checkFill}
              className="absolute inset-0 flex items-center justify-center rounded-full bg-white"
            >
              <Check size={22} weight="bold" color="var(--color-nl-green-900)" />
            </motion.span>
          </span>
          <p className="text-xl leading-[1.5] text-white/95">{statement}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
