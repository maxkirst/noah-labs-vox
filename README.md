# Herzforschung – Noah Labs Vox Landingpage

Deploy-fertiger Anwendungsordner für die Noah Labs Vox Studienkampagne.
Das ursprüngliche Planungs-/Briefing-Projekt mit `CLAUDE.md`-Historie und
den Referenzdateien liegt separat im Ordner `Noah Labs Vox` auf dem
Desktop – dieser Ordner (`Herzforschung`) enthält nur die fertige App,
bereit für GitHub und Vercel.

## Stand

- Next.js 16.3.2 (App Router), TypeScript Strict, Tailwind CSS v4, Motion,
  Phosphor Icons, pnpm.
- `pnpm lint`, `pnpm typecheck` und `pnpm build` liefen zuletzt erfolgreich.
- Seite steht auf `noindex`, bis Marken-, Rechts- und medizinische
  Freigabe vorliegen (siehe `CLAUDE.md`, Abschnitt 7/15/18).
- Markenassets sind aktuell markenkonforme Platzhalter, siehe
  `public/brand/SOURCES.md`.
- **Wichtig:** Next.js hat für den 26.08.2026 ein kritisches
  Sicherheitsupdate angekündigt (16.3.3 / 15.5.24). Vor jedem Deployment
  prüfen: https://nextjs.org/blog/upcoming-nextjs-security-release-august-2026
  und ggf. mit `pnpm add next@latest` aktualisieren.

## 1. Lokal einrichten

Voraussetzung: Node.js (LTS) und pnpm installiert
(`npm install -g pnpm`, falls noch nicht vorhanden).

```bash
cd ~/Desktop/Herzforschung
pnpm install
pnpm dev
```

Die Seite läuft dann unter http://localhost:3000. Zum Prüfen vor dem
Deployment:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 2. Auf GitHub bringen

```bash
cd ~/Desktop/Herzforschung
git init
git add .
git commit -m "chore: initialize noah labs vox project"
```

Dann auf github.com ein neues, **privates** Repository anlegen (z. B.
`herzforschung` oder `noah-labs-vox` – Namensvorschlag aus dem Briefing)
und verbinden:

```bash
git remote add origin git@github.com:<dein-github-name>/<repo-name>.git
git branch -M main
git push -u origin main
```

Wichtig laut Briefing: Repository zunächst **privat** halten, solange
Marken- und Rechtsfreigabe ausstehen. Keine `.env`-Dateien oder Secrets
committen (werden für dieses statische Projekt ohnehin nicht benötigt).

## 3. Auf Vercel deployen

1. Auf vercel.com einloggen, „Add New… → Project".
2. Das eben gepushte GitHub-Repository importieren.
3. Framework wird automatisch als Next.js erkannt, keine
   Umgebungsvariablen nötig.
4. Zunächst nur **Preview Deployment** prüfen (Desktop + Mobile).
5. Production Deployment / eigene Domain erst verbinden, wenn laut
   Briefing (Abschnitt 19, Release Gate) alle Freigaben vorliegen:
   - rechtliche und medizinische Prüfung
   - Markenfreigabe für Logo/Bildassets
   - bestätigte CTA-Ziel-URL für die App
   - `noindex` erst dann entfernen

## Offene Punkte

Siehe `public/brand/SOURCES.md` und `CLAUDE.md` Abschnitt 7/18/19 für die
vollständige Liste (Markenfreigabe, App-Deep-Link, Impressum/Datenschutz-
URLs, Next.js-Patch, medizinisch-rechtliche Prüfung).
