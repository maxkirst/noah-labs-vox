import type { Transition, Variants } from "motion/react";

/**
 * Gemeinsame Motion-Presets.
 *
 * Regeln aus dem Briefing (Abschnitt 11):
 * - keine Animation von top/left/width/height, nur transform/opacity
 * - jede Bewegung braucht einen inhaltlichen Zweck
 * - `prefers-reduced-motion` wird über `useReducedMotion()` (motion/react)
 *   an jeder Aufrufstelle respektiert; die Presets selbst bleiben kurz und
 *   dezent genug, um auch reduziert noch angenehm zu wirken.
 */

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

/** Viewport-Optionen für scroll-getriggerte Reveals: einmalig, früh genug. */
export const revealViewport = { once: true, margin: "-10% 0px -10% 0px" } as const;
