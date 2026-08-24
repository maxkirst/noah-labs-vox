import { Gift, HandHeart } from "@phosphor-icons/react/dist/ssr";
import { rewardChoice } from "@/content/campaign.de";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const icons = [Gift, HandHeart];

// Body-Text als zwei feste Zeilen, eine pro Satz, statt organischem Umbruch.
const [bodyLine1, bodyLine2] = rewardChoice.body.split(". ").map((line, index, all) =>
  index < all.length - 1 ? `${line}.` : line,
);

/** Abschnitt 5: Gutschein oder Spende – ruhiger Zwei-Wege-Split. */
export function RewardChoiceSection() {
  return (
    <section className="bg-nl-surface py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-balance font-sans text-[clamp(2.25rem,3.25vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-nl-ink">
            {rewardChoice.heading}
          </h2>
          <p className="mt-5 max-w-[820px] text-lg leading-[1.6] text-nl-ink">
            <span className="block">{bodyLine1}</span>
            <span className="block">{bodyLine2}</span>
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 divide-y divide-nl-sage-300/60 overflow-hidden rounded-3xl border border-nl-sage-300/60 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {rewardChoice.options.map((option, index) => {
            const Icon = icons[index];
            // Spende-Label bekommt einen festen Umbruch ("Spende an den" /
            // "Bundesverband ..."), statt sich auf den natürlichen
            // Textumbruch zu verlassen.
            const words = option.label.split(" ");
            const isSpende = option.key === "spende";
            const line1 = isSpende ? words.slice(0, 3).join(" ") : option.label;
            const line2 = isSpende ? words.slice(3).join(" ") : null;

            return (
              <ScrollReveal key={option.key} delay={index * 0.1} className="flex flex-row items-center gap-4 p-8 sm:p-10">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-nl-sage-300/40"
                >
                  <Icon size={26} weight="regular" color="var(--color-nl-green-900)" />
                </span>
                <p className="text-xl font-semibold leading-snug text-nl-ink">
                  {line2 ? (
                    <>
                      <span className="block">{line1}</span>
                      <span className="block">{line2}</span>
                    </>
                  ) : (
                    line1
                  )}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[15px] font-medium text-nl-muted">Die Auswahl erfolgt in der App.</p>
      </div>
    </section>
  );
}
