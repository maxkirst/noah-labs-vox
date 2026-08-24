import { whyVoice } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AmbientOrb } from "@/components/ui/ambient-orb";
import { Button } from "@/components/ui/Button";

/**
 * Abschnitt 2: Warum die Stimme zählt.
 *
 * Heller Bereich bewusst reduziert auf Headline, ein Textblock und ein CTA
 * (Apple-artiger Zwei-Spalten-Schnitt); die Erklärung der drei Signalebenen
 * sitzt als kompakte Legende direkt unter der Grafik.
 */
export function WhyVoiceSection() {
  return (
    <section id={whyVoice.id} className="scroll-mt-[72px] bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal as="div">
              <h2 className="text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-nl-ink">
                {whyVoice.heading}
              </h2>
              <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-[1.65] text-nl-ink">
                {whyVoice.body} {whyVoice.addendum}
              </p>
              <div className="mt-8">
                <Button href="#ablauf">So funktioniert es</Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1} as="div" className="flex flex-col items-center gap-8">
              <div className="aspect-square w-full max-w-[440px]" role="img" aria-label={whyVoice.visualAlt}>
                <AmbientOrb />
              </div>
              <ul className="grid w-full max-w-[440px] grid-cols-1 gap-4 sm:grid-cols-3">
                {whyVoice.signalLayers.map((layer) => (
                  <li key={layer.key} className="text-center sm:text-left">
                    <p className="text-base font-semibold text-nl-green-900">{layer.label}</p>
                    <p className="mt-1 text-base leading-[1.5] text-nl-muted">{layer.description}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
