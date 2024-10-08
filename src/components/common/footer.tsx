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
  {
    name: "Template Nametag",
    href: "https://cdn.jsdelivr.net/gh/himarplupi/assets@main/mabim/2024/template-nametag.pdf",
  },
  {
    name: "Template Surat Keterangan",
    href: "https://cdn.jsdelivr.net/gh/himarplupi/assets@main/mabim/2024/template-sk.pdf",
  },
  {
    name: "Form Pelaporan Panitia",
    href: "https://google.com",
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
      <div className="container flex flex-col gap-4 py-8">
        <p className="font-bonobo text-lg text-neutral-200">
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
      </div>
    </footer>
  );
}
