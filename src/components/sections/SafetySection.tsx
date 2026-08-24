import { safety } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SafetyChecklist } from "@/components/motion/SafetyChecklist";

/**
 * Abschnitt 6: Freiwillig und sicher.
 * Einziger bewusst invertierter Markenblock der Seite (tiefgrünes Feld,
 * helle Schrift). Zentrierte Headline über einer Checkliste, die beim
 * Scrollen Zeile für Zeile mit Haken aufblendet.
 */
export function SafetySection() {
  return (
    <section id={safety.id} className="scroll-mt-[72px] bg-nl-green-900 py-18 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="mx-auto text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
            {safety.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-12 sm:mt-16">
          <SafetyChecklist />
        </div>
      </div>
    </section>
  );
}
