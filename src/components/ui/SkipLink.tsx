import { skipLink } from "@/content/campaign.de";

/** Skip-Link zum Hauptinhalt, sichtbar sobald er den Fokus erhält. */
export function SkipLink() {
  return (
    <a
      href={`#${skipLink.targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-nl-green-900 focus:px-5 focus:py-3 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      {skipLink.label}
    </a>
  );
}
