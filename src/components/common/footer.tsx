"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <footer className="relative z-10 flex flex-col gap-4 px-3">
      <p className="font-bonobo text-neutral-200">
        Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
        mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
        dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
        Cibiru.
      </p>

      <p className="font-bonobo text-neutral-200">
        This site is passionally crafted by{" "}
        <Link
          href="https://blog.himarpl.com/@dikdns"
          target="_blank"
          className={cn(
            "font-bonobo font-semibold text-neutral-100 hover:underline",
          )}
        >
          Andika
        </Link>
        {", "}
        <Link
          href="https://blog.himarpl.com/@arsya-permana"
          target="_blank"
          className={cn(
            "font-bonobo font-semibold text-neutral-100 hover:underline",
          )}
        >
          Arsya
        </Link>
        {", and "}
        <Link
          href="https://blog.himarpl.com/@zamzami"
          target="_blank"
          className={cn(
            "font-bonobo font-semibold text-neutral-100 hover:underline",
          )}
        >
          Zamzami
        </Link>
        .
      </p>
      <ul className="flex flex-col gap-y-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "link" }),
                "font-bonobo font-semibold text-neutral-100",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
