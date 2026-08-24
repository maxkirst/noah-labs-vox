import type { Metadata } from "next";
import { siteMeta } from "@/content/campaign.de";

/**
 * Zentrale Metadaten-Konfiguration.
 *
 * WICHTIG: `robots: noindex` bleibt aktiv, bis Marken-, Rechts- und
 * medizinische Freigabe vorliegen (Briefing Abschnitt 15 und 18).
 * Canonical-URL und Open-Graph-Bild werden erst nach Bestätigung der
 * finalen Domain bzw. eines freigegebenen Markenmotivs gesetzt.
 */
export const siteMetadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    locale: "de_DE",
    type: "website",
  },
};
