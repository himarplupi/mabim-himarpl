"use client";

import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="container relative z-10 flex flex-col gap-4 bg-primary-800">
      <p className="font-bonobo text-neutral-200">
        Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
        mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
        dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
        Cibiru.
      </p>

      <ul className="flex flex-col gap-y-2">
        {navLinks.map((link) => (
          <li key={link.name} className="overflow-hidden">
            <Link
              className="inline-block font-bonobo text-lg leading-5 text-primary-200 hover:underline"
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
