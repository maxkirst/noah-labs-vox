"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { DeviceMobile, Microphone, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { process } from "@/content/campaign.de";

const icons = [DeviceMobile, Microphone, CheckCircle];

/**
 * Prozesslinie für "So einfach ist die Teilnahme".
 * Horizontal auf Desktop, vertikal auf Mobile. Die Linie wächst einmalig
 * mit dem Scroll-Fortschritt durch die Sektion (keine Endlosschleife). Jedes
 * Icon poppt auf, sobald die wachsende Linie ihre Position erreicht –
 * abgeleitet vom selben Scroll-Fortschrittswert, kein zusätzlicher
 * Viewport-Beobachter nötig.
 */
export function ProcessLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.55"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const stepCount = process.steps.length;

  return (
    <div ref={containerRef} className="relative">
      {/* Vertikale Linie (Mobile) */}
      <div
        aria-hidden="true"
        className="absolute left-[35px] top-[36px] bottom-[36px] w-px bg-nl-sage-300 md:hidden"
      >
        <motion.div
          className="w-full origin-top bg-nl-green-900"
          style={{ height: "100%", scaleY: shouldReduceMotion ? 1 : lineScale }}
        />
      </div>

      {/* Horizontale Linie (Desktop) */}
      <div
        aria-hidden="true"
        className="absolute left-[72px] right-[72px] top-[36px] hidden h-px bg-nl-sage-300 md:block"
      >
        <motion.div
          className="h-full origin-left bg-nl-green-900"
          style={{ width: "100%", scaleX: shouldReduceMotion ? 1 : lineScale }}
        />
      </div>

      <ol className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
        {process.steps.map((step, index) => (
          <li key={step.key} className="relative flex gap-5 md:flex-col md:items-center md:gap-5 md:text-center">
            <ProcessStepIcon
              icon={icons[index]}
              scrollYProgress={scrollYProgress}
              threshold={stepCount > 1 ? index / (stepCount - 1) : 0}
              reduceMotion={!!shouldReduceMotion}
            />
            <div className="pt-3 md:pt-0">
              <p className="text-lg font-semibold text-nl-ink md:text-xl">
                <span className="sr-only">Schritt {index + 1}: </span>
                {step.title}
              </p>
              <p className="mt-1 max-w-[26ch] text-base leading-[1.5] text-nl-muted md:mx-auto">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProcessStepIcon({
  icon: Icon,
  scrollYProgress,
  threshold,
  reduceMotion,
}: {
  icon: PhosphorIcon;
  scrollYProgress: MotionValue<number>;
  threshold: number;
  reduceMotion: boolean;
}) {
  const rangeStart = Math.max(0, threshold - 0.18);
  const scale = useTransform(scrollYProgress, [rangeStart, threshold], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [rangeStart, threshold], [0, 1]);

  return (
    <motion.span
      className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-nl-surface ring-2 ring-nl-sage-300"
      aria-hidden="true"
      style={reduceMotion ? undefined : { scale, opacity }}
    >
      <Icon size={36} weight="regular" color="var(--color-nl-green-900)" />
    </motion.span>
  );
}
