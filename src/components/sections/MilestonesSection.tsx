import { milestones } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MilestonePath } from "@/components/motion/MilestonePath";

/** Abschnitt 4: Die 150-Euro-Meilensteine. */
export function MilestonesSection() {
  return (
    <section id={milestones.id} className="scroll-mt-[72px] bg-white py-18 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-nl-ink">
            {milestones.heading}
          </h2>
          <p className="mt-5 text-lg leading-[1.6] text-nl-ink">{milestones.intro}</p>
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <MilestonePath />
        </div>
      </div>
    </section>
  );
}
