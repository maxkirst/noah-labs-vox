"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { milestones } from "@/content/campaign.de";
import { ScrollReveal } from "./ScrollReveal";

// Betrag springt beim Sichtbarwerden spürbar auf (Spring mit Überschwingen)
// und zählt dabei von 0 auf den Endwert hoch – bewusste Ausnahme von der
// sonstigen Briefing-Vorgabe ("Beträge erscheinen direkt"), auf
// ausdrücklichen Wunsch. aria-label trägt immer den fertigen Wert, damit
// Screenreader nie einen Zwischenstand vorlesen.
const amountPop: Variants = {
  hidden: { opacity: 0, scale: 0.55 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 14 } },
};

/** Zerlegt z. B. "+150 €" in Präfix ("+"), Zielzahl (150) und Suffix (" €"). */
function parseAmount(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw };
  const [, prefix, digits, suffix] = match;
  return { prefix, target: Number(digits), suffix };
}

function AnimatedAmount({
  raw,
  className,
}: {
  raw: string;
  className: string;
}) {
  const { prefix, target, suffix } = parseAmount(raw);
  const [display, setDisplay] = useState(target);
  const startedRef = useRef(false);

  const startCountUp = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const duration = 900;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <motion.p
      variants={amountPop}
      onAnimationStart={startCountUp}
      className={className}
      aria-label={raw}
    >
      {prefix}
      {display}
      {suffix}
    </motion.p>
  );
}

/**
 * Die beiden Meilenstein-Voucher-Karten für "Die 150-Euro-Meilensteine".
 *
 * Bewusst zwei gleichwertige, zentrierte Karten statt einer verbindenden
 * Wave-Linie mit Punkt-Markern – der Gesamtbetrag "bis zu 150 €" wird erst
 * darunter gezeigt.
 */
export function MilestonePath() {
  const [first, second] = milestones.items;

  return (
    // Volle Breite des Seiteninhalts (Parent-Container ist bereits auf
    // max-w-[1280px] begrenzt) – Karten und Summen-Leiste bleiben bündig,
    // weil beide w-full innerhalb desselben Grids/Containers sind.
    <div className="relative">
      {/* Klare Zeitachse: Start -> +50 € nach 6 Monaten -> +100 € nach weiteren 6 Monaten. */}
      <ScrollReveal
        as="div"
        className="mx-auto mb-10 flex w-full max-w-[760px] flex-col items-center gap-3 text-center sm:mb-14 sm:flex-row sm:justify-center sm:gap-3"
      >
        <span className="rounded-full bg-nl-green-900 px-4 py-1.5 text-sm font-semibold text-white">Start</span>
        <ArrowRight aria-hidden="true" size={18} weight="bold" className="hidden shrink-0 text-nl-sage-600 sm:block" />
        <span className="rounded-full bg-nl-sage-300/40 px-4 py-1.5 text-sm font-medium text-nl-green-900">
          Nach 6 Monaten: +50 €
        </span>
        <ArrowRight aria-hidden="true" size={18} weight="bold" className="hidden shrink-0 text-nl-sage-600 sm:block" />
        <span className="rounded-full bg-nl-sage-300/40 px-4 py-1.5 text-sm font-medium text-nl-green-900">
          Nach weiteren 6 Monaten: +100 €
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <MilestoneStation item={first} />
        <MilestoneStation item={second} />
      </div>

      <ScrollReveal
        className="relative mt-14 flex w-full flex-col items-center gap-2 rounded-3xl border border-nl-sage-300/60 bg-nl-surface px-6 py-8 text-center md:mt-20"
        delay={0.1}
      >
        <p className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-nl-muted">
          {first.amount} · {second.amount}
        </p>
        <AnimatedAmount
          raw={milestones.totalLabel}
          className="whitespace-nowrap font-sans text-4xl font-bold tabular-nums text-nl-green-900 sm:text-5xl"
        />
        <p className="max-w-[42ch] text-[15px] text-nl-muted">pro Jahr, wenn Sie beide Meilensteine erreichen.</p>
      </ScrollReveal>
    </div>
  );
}

/** Hebt "seit Start" hervor, falls vorhanden – die 184 Aufnahmen zählen kumulativ seit Beginn, nicht nur im zweiten Halbjahr. */
function RequirementText({ requirement }: { requirement: string }) {
  const marker = "seit Start";
  const markerIndex = requirement.indexOf(marker);
  if (markerIndex === -1) return <>{requirement}</>;

  return (
    <>
      {requirement.slice(0, markerIndex)}
      <strong className="font-semibold text-nl-green-900">{marker}</strong>
      {requirement.slice(markerIndex + marker.length)}
    </>
  );
}

function MilestoneStation({ item }: { item: (typeof milestones.items)[number] }) {
  return (
    <ScrollReveal className="flex w-full flex-col items-center">
      {/* Voucher-Karte: zwei Zahlenblöcke statt generischer Feature-Karten. */}
      <div className="relative w-full overflow-hidden rounded-[28px] border-2 border-nl-sage-300/70 bg-nl-surface">
        <div className="flex flex-col items-center gap-3 px-6 pb-6 pt-9 text-center sm:px-8">
          <span className="inline-flex items-center whitespace-nowrap rounded-full bg-nl-green-900/10 px-4 py-1.5 text-sm font-medium text-nl-green-900">
            {item.station} · {item.timeframe}
          </span>
          <AnimatedAmount
            raw={item.amount}
            className="whitespace-nowrap font-sans text-6xl font-bold leading-none tabular-nums text-nl-green-900 sm:text-7xl lg:text-8xl"
          />
        </div>

        {/* Perforierte Trennlinie mit ausgestanzten Kerben, wie bei einem Gutschein. */}
        <div className="relative h-0 border-t-2 border-dashed border-nl-sage-300">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          />
          <span
            aria-hidden="true"
            className="absolute right-0 top-1/2 h-6 w-6 translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          />
        </div>

        <div className="flex flex-col gap-2 px-6 pb-8 pt-7 text-center sm:px-8">
          <p className="mx-auto max-w-[28ch] text-lg text-nl-ink">
            <RequirementText requirement={item.requirement} />
          </p>
          <p className="text-[15px] text-nl-muted">{item.note}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
