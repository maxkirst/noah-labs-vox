/**
 * Offizielles Noah-Labs-Logo, lokal abgelegt unter public/brand/
 * (siehe public/brand/SOURCES.md – Freigabe durch den Auftraggeber am
 * 25.08.2026). Kein Hotlinking auf die Noah-Labs-CDN.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statisches Marken-SVG, keine Next/Image-Optimierung nötig
    <img
      src="/brand/noah-labs-logo.svg"
      alt="Noah Labs"
      className={`h-8 w-auto ${className}`}
    />
  );
}
