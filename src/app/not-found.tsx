"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-y-2 bg-gradient-to-b from-primary-600/95 to-primary-700/95 bg-repeat">
      <h2 className="font-rock-n-roll-one text-3xl font-bold text-neutral-50">
        Halaman Tidak Ditemukan
      </h2>
      <p className="font-bonobo text-lg text-neutral-50">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}
