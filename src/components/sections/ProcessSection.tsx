import { process } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ProcessLine } from "@/components/motion/ProcessLine";

/** Abschnitt 3: So einfach ist die Teilnahme. */
export function ProcessSection() {
  return (
    <section id={process.id} className="scroll-mt-[72px] bg-nl-surface py-18 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-nl-ink">
            {process.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ProcessLine />
        </div>
      </div>
    </section>
  );
}
