/**
 * Zentrale Inhalte der Noah Labs Vox Studienkampagne (Deutsch).
 *
 * Alle Fakten in diesem File entsprechen wortgetreu Abschnitt 6 des
 * Projekt-Briefings (CLAUDE.md) sowie dem geprüften Kampagnen-Mailing
 * (references/campaign-source.png). Beträge und Voraussetzungen dürfen
 * hier nicht verändert, gerundet oder umformuliert werden, ohne das
 * Briefing erneut gegenzuprüfen.
 */

export const siteMeta = {
  title: "Noah Labs Vox Studie | Mit Ihrer Stimme die Herzforschung unterstützen",
  description:
    "Erfahren Sie, wie Sie mit einer täglichen Sprachaufnahme die Noah Labs Vox Forschung unterstützen und bis zu 150 Euro pro Jahr erhalten können.",
  locale: "de-DE",
} as const;

export const nav = {
  logoAlt: "Noah Labs",
  links: [
    { label: "Warum die Stimme", href: "#warum-die-stimme" },
    { label: "So funktioniert es", href: "#ablauf" },
    { label: "Dankeschön", href: "#dankeschoen" },
    { label: "Freiwillig & sicher", href: "#sicherheit" },
  ],
  cta: { label: "Jetzt teilnehmen", href: "https://forms.gle/HfEQuLjo4hU3BTW6A" },
  menuOpenLabel: "Menü öffnen",
  menuCloseLabel: "Menü schließen",
} as const;

export const hero = {
  eyebrow: "Noah Labs Vox Studie",
  headline: "Ihre Stimme bewegt Herzforschung.",
  subline:
    "Mit einer kurzen täglichen Sprachaufnahme unterstützen Sie die Forschung und erhalten bis zu 150 Euro pro Jahr.",
  primaryCta: { label: "Jetzt teilnehmen", href: "https://forms.gle/HfEQuLjo4hU3BTW6A" },
  secondaryLink: { label: "So funktioniert es", href: "#ablauf" },
} as const;

export const whyVoice = {
  id: "warum-die-stimme",
  heading: "Herzgesundheit kann hörbar werden.",
  body: "Neben Gewicht, Blutdruck und EKG erforscht Noah Labs die Stimme als zusätzliches Anzeichen. Die Technologie untersucht kleine Veränderungen, zum Beispiel Tonhöhe, Atemfrequenz und wie stabil die Stimme klingt.",
  addendum:
    "Das Forschungsziel ist, eine Verschlechterung der Herzinsuffizienz früher zu erkennen, damit rechtzeitig gehandelt und ein Klinikaufenthalt möglichst verhindert werden kann.",
  signalLayers: [
    {
      key: "tonhoehe",
      label: "Tonhöhe",
      description: "Wie hoch oder tief die Stimme im Tagesverlauf klingt.",
    },
    {
      key: "atemfrequenz",
      label: "Atemfrequenz",
      description: "Wie sich der Atemrhythmus beim Sprechen zeigt.",
    },
    {
      key: "stabilitaet",
      label: "Stabilität",
      description: "Wie gleichmäßig und ruhig die Stimme klingt.",
    },
  ],
  visualAlt:
    "Grafische Darstellung einer Voice-Wave mit drei beschrifteten Signalebenen: Tonhöhe, Atemfrequenz und Stabilität.",
} as const;

export const process = {
  id: "ablauf",
  heading: "Eine kurze Aufnahme pro Tag.",
  steps: [
    {
      key: "app-oeffnen",
      title: "App öffnen",
      description: "Noah Labs App aufrufen.",
    },
    {
      key: "sprachprobe-aufnehmen",
      title: "Sprachprobe aufnehmen",
      description: "Einmal täglich eine kurze Aufnahme durchführen.",
    },
    {
      key: "fortschritt-erreichen",
      title: "Fortschritt erreichen",
      description: "Die App informiert automatisch, sobald ein Meilenstein erreicht ist.",
    },
  ],
} as const;

export const milestones = {
  id: "dankeschoen",
  heading: "Ihr täglicher Beitrag. Unser Dankeschön.",
  intro: "Sie können innerhalb eines Jahres eine Aufwandsentschädigung von insgesamt bis zu 150 Euro erhalten.",
  totalLabel: "bis zu 150 €",
  items: [
    {
      key: "meilenstein-1",
      station: "Meilenstein 1",
      timeframe: "Nach 6 Monaten",
      amount: "+50 €",
      requirement: "Mindestens 92 Stimmaufnahmen insgesamt",
      note: "Pro Tag zählt höchstens eine Aufnahme.",
    },
    {
      key: "meilenstein-2",
      station: "Meilenstein 2",
      timeframe: "Nach weiteren 6 Monaten",
      amount: "+100 €",
      requirement: "Mindestens 184 Stimmaufnahmen insgesamt seit Start",
      note: "Pro Tag zählt höchstens eine Aufnahme.",
    },
  ],
} as const;

export const rewardChoice = {
  heading: "Sie entscheiden, wie wir Danke sagen.",
  body: "Nach dem Erreichen eines Meilensteins werden Sie automatisch in der App benachrichtigt. Dort wählen Sie einen Wunschgutschein oder eine Spende.",
  options: [
    {
      key: "gutschein",
      label: "Wunschgutschein per Post oder E-Mail",
    },
    {
      key: "spende",
      label: "Spende an den Bundesverband für Herzkranke Kinder e.V.",
    },
  ],
} as const;

export const safety = {
  id: "sicherheit",
  heading: "Absolut freiwillig und sicher.",
  statements: [
    "Die Teilnahme an der Studie zur Stimme ist komplett freiwillig.",
    "Ihre Entscheidung hat keinen Einfluss auf Ihre normale medizinische Betreuung.",
    "Ihre Daten bleiben streng vertraulich.",
    "Die Daten werden ausschließlich für medizinische Forschungszwecke genutzt.",
    "Die Aufwandsentschädigung ist ein Dankeschön für Ihren Beitrag.",
  ],
} as const;

export const activate = {
  id: "aktivieren",
  heading: "In der Noah Labs App aktivieren.",
  bodySteps: [
    "Öffnen Sie die Noah Labs App.",
    "Dort finden Sie alle weiteren Informationen.",
    "Entscheiden Sie mit einem Klick: teilnehmen oder ablehnen.",
  ],
  // CTA-Regel (Briefing Abschnitt 7): Ohne bestätigte Ziel-URL kein Button,
  // sondern eine nicht täuschende, statische Callout-Zeile. Als zwei kurze
  // Schritte statt einem Satz, damit sie auf einen Blick erfassbar sind.
  calloutSteps: ["Noah Labs App öffnen.", '„Eine Sprachprobe aufnehmen" oder „Konto" wählen.'],
  confirmedAppUrl: null as string | null,
} as const;

export const closing = {
  heading: "Danke, dass Ihre Stimme die Herzforschung von morgen unterstützt.",
  signature: "Ihr Noah Labs Team",
} as const;

export const footer = {
  // Bestätigte offizielle URLs (Freigabe durch den Auftraggeber am 25.08.2026).
  imprintUrl: "https://www.noah-labs.com/de/imprint" as string | null,
  privacyUrl: "https://www.noah-labs.com/de/data-privacy" as string | null,
} as const;

export const skipLink = {
  label: "Zum Hauptinhalt springen",
  targetId: "main-content",
} as const;
