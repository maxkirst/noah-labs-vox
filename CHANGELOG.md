# Changelog

Alle nennenswerten Änderungen an der Noah Labs Vox Landingpage.

## [Unreleased]

### Fixed
- Hero-Headline: Unterlängen bei „g" (bewegt, Herzforschung) wurden durch
  den Zeilen-Reveal-Effekt (`overflow-hidden`) abgeschnitten. Behoben durch
  mehr Zeilenhöhe und kompensierten Puffer am Maskierungs-Wrapper.
- CTA-Button „So funktioniert es" im Abschnitt „Warum die Stimme zählt"
  hat nicht zum Ablauf-Abschnitt gescrollt. Ursache: `Button` nutzte
  `next/link` für reine Same-Page-Hash-Links, die ohne Pfadwechsel nicht
  automatisch scrollen. Behoben durch natives `<a>` für Hash-Ziele.

### Changed
- Seitentitel auf „Noah Labs Vox Studie" gekürzt (vorher mit
  Unterzeile „| Mit Ihrer Stimme die Herzforschung unterstützen").
- Seitentitel und Hero-Eyebrow von „Noah Labs Vox Studie" auf
  „Noah Labs Vox" geändert (Seite dient nicht der Patientenrekrutierung
  für eine Studie).
- Anmeldetext im Abschnitt „Warum die Stimme zählt" überarbeitet
  (klarere Alltagssprache statt Fachformulierung).
- CTA-Ziel-URL von Google Forms auf das neue HubSpot-Formular
  (`g47y4.share-eu1.hsforms.com`) umgestellt.

### Removed
- Aussage „Ihre Entscheidung hat keinen Einfluss auf Ihre normale
  medizinische Betreuung." im Abschnitt „Freiwillig und sicher" entfernt.

## [0.1.0] - 2026-08-25

Erste vollständige Version der Kampagnenseite: Hero, Warum-die-Stimme,
Ablauf, Meilensteine, Gutschein/Spende, Sicherheit-Checkliste,
App-Aktivierung, Abschluss, Navigation und Footer. Siehe
`public/brand/SOURCES.md` für den Freigabestatus der Markenassets.
