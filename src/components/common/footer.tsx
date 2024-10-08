"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

const navLinks = [
  {
    name: "Instagram",
    href: "http://instagram.com/mabimrpl",
  },
  {
    name: "Booklet",
    href: "https://cdn.jsdelivr.net/gh/himarplupi/assets@main/mabim/2024/booklet.pdf",
  },
  {
    name: "Twibbon",
    href: "https://drive.google.com",
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
    <footer className="container relative z-10 flex flex-col gap-4 bg-primary-800 py-8 md:flex-row">
      <p className="font-bonobo text-lg text-neutral-200 md:text-xl">
        Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
        mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
        dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
        Cibiru.
      </p>

      <ul className="ml-4 flex flex-col gap-y-2 border-l border-primary-600 py-3 pl-6">
        {navLinks.map((link) => (
          <li key={link.name} className="overflow-hidden">
            <Link
              className="inline-block font-bonobo text-lg leading-5 text-primary-200 hover:underline"
              href={link.href}
              target={isExternalLink(link.href) ? "_blank" : undefined}
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
