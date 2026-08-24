import { DeviceMobile, Check } from "@phosphor-icons/react/dist/ssr";
import { activate } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

/**
 * Abschnitt 7: Teilnahme in der App aktivieren.
 *
 * CTA-Regel (Briefing Abschnitt 7 / 15): Solange keine bestätigte
 * App-Deep-Link-URL vorliegt, wird kein Button mit erfundenem Ziel
 * gerendert, sondern eine nicht täuschende, statische Callout-Zeile.
 */
export function ActivateSection() {
  return (
    <section id={activate.id} className="scroll-mt-[72px] bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1000px] text-center">
          <ScrollReveal>
            <h2 className="text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-nl-ink">
              {activate.heading}
            </h2>

            <div className="mx-auto max-w-[720px]">
              {activate.confirmedAppUrl ? (
                <div className="mt-6">
                  <Button href={activate.confirmedAppUrl}>Jetzt in der Noah Labs App öffnen</Button>
                </div>
              ) : (
                <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl bg-nl-surface px-6 py-7 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
                  <span
                    aria-hidden="true"
                    className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-nl-sage-300/40"
                  >
                    <DeviceMobile size={40} weight="regular" color="var(--color-nl-green-900)" />
                    <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-nl-green-900 ring-4 ring-nl-surface">
                      <Check size={16} weight="bold" color="#ffffff" />
                    </span>
                  </span>
                  <ol className="flex flex-col gap-1">
                    {activate.calloutSteps.map((step, index) => (
                      <li
                        key={step}
                        className={
                          index === 0
                            ? "text-lg font-semibold leading-[1.4] text-nl-ink"
                            : "text-base leading-[1.5] text-nl-muted"
                        }
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <ol className="mx-auto mt-9 flex max-w-[620px] flex-col gap-3 text-left">
                {activate.bodySteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nl-sage-300/40 text-sm font-semibold text-nl-green-900"
                    >
                      {index + 1}
                    </span>
                    <span className="pt-0.5 text-lg leading-[1.5] text-nl-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
