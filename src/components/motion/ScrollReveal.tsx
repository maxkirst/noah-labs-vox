"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, revealViewport } from "@/lib/motion";
import type { Variants } from "motion/react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Einheitlicher Scroll-Reveal-Wrapper für wichtige Inhaltsgruppen.
 * Animiert genau einmal beim ersten Eintritt in den Viewport und
 * überspringt jede Bewegung vollständig bei `prefers-reduced-motion`.
 */
export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
