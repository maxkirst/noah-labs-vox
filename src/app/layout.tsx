import type { Metadata } from "next";
import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import { inter, lora } from "@/lib/fonts";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
