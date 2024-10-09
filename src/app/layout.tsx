import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Navbar } from "@/components/common/navbar";
import { ReactLenis } from "@/components/common/react-lenis";
import { PHProvider } from "@/components/providers";

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
        <PHProvider>
          <Navbar />
          <ReactLenis>{children}</ReactLenis>
        </PHProvider>
      </body>
    </html>
  );
}
