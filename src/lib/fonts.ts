import localFont from "next/font/local";

/**
 * Inter (UI, Navigation, Body, Zahlen) und Lora (emotionale Displayzeilen,
 * einzelne Subheads/Zitate) über `next/font/local`.
 *
 * Selbst gehostet aus den npm-Paketen `@fontsource/inter` /
 * `@fontsource/lora` statt per Live-Abruf von fonts.googleapis.com: das
 * Build-Netzwerk dieser Umgebung erlaubt nur eine kleine Allowlist an
 * Paket-Registries, keinen freien Zugriff auf externe Font-CDNs. Die
 * Vorgabe aus CLAUDE.md ("Fonts über next/font laden, nicht über externe
 * <link>-Tags") ist damit weiterhin erfüllt.
 */
export const inter = localFont({
  src: [
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const lora = localFont({
  src: [
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/lora/files/lora-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-lora",
  display: "swap",
});
