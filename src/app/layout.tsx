import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { ReactLenis } from "@/components/common/react-lenis";
import { env } from "@/env";

import {
  fontBonobo,
  fontRockNRollOne,
  fontSheikahComplete,
  fontZelda,
} from "./fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mabim RPL",
  description: "Masa Bimbingan Rekayasa Perangkat Lunak 2024",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${GeistSans.variable} ${fontBonobo.variable} ${fontZelda.variable} ${fontRockNRollOne.variable} ${fontSheikahComplete.variable}`}
    >
      <body>
        {env.NODE_ENV === "development" ? (
          <ReactLenis>{children}</ReactLenis>
        ) : (
          <main className="flex h-screen items-center justify-center">
            <h1 className="text-center font-bonobo text-2xl font-semibold">
              On Development
            </h1>
          </main>
        )}
      </body>
    </html>
  );
}
