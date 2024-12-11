"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

import { cn } from "@/lib/utils";

const navLinks = [
  {
    name: "Booklet",
    href: "https://s.id/BookletMABIMRPL2024",
  },
  {
    name: "Twibbon",
    href: "https://s.id/TwibbonMABIMRPL2024",
  },
  {
    name: "Lihat Kelompok",
    href: "#kelompok",
  },
  {
    name: "Timeline",
    href: "#timeline",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Surat Keterangan Izin",
    href: "https://s.id/surat-keterangan-izin-mabim-rpl-2024",
  },
  {
    name: "Form Pelaporan Panitia",
    href: "https://s.id/form-pelaporan-panitia-mabim-rpl-2024",
  },
  {
    name: "Instagram Mabim RPL",
    href: "http://instagram.com/mabimrpl",
  },
];

const isExternalLink = (href: string) => href.includes("http");

export function Footer() {
  const lenis = useLenis();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (!isExternalLink(href)) {
      e.preventDefault();
      lenis?.scrollTo(href, { offset: -64 });
    }
  };

  return (
    <footer className="relative z-10 bg-primary-800">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center">
        <p className="font-bonobo text-lg text-neutral-200 md:text-xl">
          Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
          mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
          dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
          Cibiru.
        </p>

        <ul className="ml-4 flex min-w-72 flex-col gap-y-2 border-l border-primary-600 py-3 pl-6">
          {navLinks.map((link) => (
            <li key={link.name} className="overflow-hidden">
              <Link
                className={cn(
                  "inline-block font-bonobo text-lg leading-5 text-primary-200 hover:underline",
                  {
                    "pointer-events-none opacity-50 hover:no-underline":
                      link.disabled,
                  },
                )}
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                onClick={(e) => {
                  if (link.disabled) {
                    e.preventDefault();
                    return;
                  }
                  handleLinkClick(link.href, e);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
