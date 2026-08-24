import { footer } from "@/content/campaign.de";

/**
 * Abschnitt 8 (Teil 2): Footer.
 * Rechtliche Links werden erst mit bestätigten offiziellen URLs aktiv
 * (Briefing Abschnitt 7 / 15) – bis dahin als deaktivierter Hinweistext.
 * Kein Newsletter, kein zusätzliches Kontaktformular.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-nl-sage-300/60 bg-white py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-5 text-center sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] text-nl-muted">
          <li>
            {footer.imprintUrl ? (
              <a
                href={footer.imprintUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center hover:text-nl-green-900"
              >
                Impressum
              </a>
            ) : (
              <span title="Ziel-URL noch nicht bestätigt">Impressum</span>
            )}
          </li>
          <li>
            {footer.privacyUrl ? (
              <a
                href={footer.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center hover:text-nl-green-900"
              >
                Datenschutz
              </a>
            ) : (
              <span title="Ziel-URL noch nicht bestätigt">Datenschutz</span>
            )}
          </li>
        </ul>

        <p className="text-[15px] text-nl-muted">© {year} Noah Labs</p>
      </div>
    </footer>
  );
}
