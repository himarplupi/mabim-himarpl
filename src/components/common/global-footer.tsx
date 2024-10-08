"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import LogoKabinetAscendia from "@/assets/logo-ascendia-landscape-dark.png";
import LogoHIMARPL from "@/assets/logo-landscape-dark.png";
import LogoUPICibiru from "@/assets/logo-upi-cibiru.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export function GlobalFooter() {
  return (
    <footer className="container bg-primary-800 pb-16 pt-8 font-bonobo text-primary-50 md:pb-0">
      <div className="flex flex-col gap-y-6 md:px-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Image
            src={LogoUPICibiru}
            alt="logo Kampus UPI di Cibiru"
            width={150}
          />
          <Image src={LogoHIMARPL} alt="logo HIMARPL" width={200} />
          <Image
            src={LogoKabinetAscendia}
            alt="logo Kabinet Ascendia"
            width={150}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <SocialMediaLinks />

          <Alamat />

          <Pranala />

          <MediaPartner />
        </div>
      </div>

      <div className="mt-6 space-y-1 py-6">
        <p className="text-center text-sm leading-5">
          Passionally crafted by{" "}
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
          . Supported by department{" "}
          <a
            className={cn(
              "font-bonobo font-semibold text-neutral-100 hover:underline",
            )}
            target="_blank"
            href="https://www.himarpl.com/about/be/kominfo"
          >
            Kominfo
          </a>{" "}
          .
        </p>
        <p className="text-center text-sm leading-5">
          &copy; 2024 HIMARPL UPI, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="flex w-full justify-between gap-2 sm:w-fit sm:flex-col">
      <li>
        <Link
          target="_blank"
          href={"mailto:himarpl@upi.edu"}
          className={cn(
            buttonVariants({
              variant: "default",
            }),
          )}
        >
          <Mail color="hsl(var(--background))" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={"https://instagram.com/himarpl"}
          className={cn(
            buttonVariants({
              variant: "default",
            }),
          )}
        >
          <SiInstagram color="hsl(var(--background))" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={"https://www.youtube.com/@himarplcibiru5901"}
          className={cn(
            buttonVariants({
              variant: "default",
            }),
          )}
        >
          <SiYoutube color="hsl(var(--background))" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={"https://www.tiktok.com/@himarpl"}
          className={cn(
            buttonVariants({
              variant: "default",
            }),
          )}
        >
          <SiTiktok color="hsl(var(--background))" className="h-5 w-5" />
        </Link>
      </li>
    </ul>
  );
}

function Alamat() {
  return (
    <div>
      <h4 className="scroll-m-20 font-serif text-lg font-semibold tracking-wide">
        Alamat
      </h4>
      <p className="text-sm leading-4 text-primary-200 sm:w-64 md:w-96">
        Ruang HIMARPL Gedung Sekretariat Jalan Raya Cibiru Km. 15 Bandung 40393
      </p>
    </div>
  );
}

function Pranala() {
  return (
    <div>
      <h4 className="scroll-m-20 font-serif text-lg font-semibold tracking-wide">
        Pranala
      </h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://himarpl.com"
          >
            Himpunan Mahasiwa Rekayasa Perangkat Lunak
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://blog.himarpl.com"
          >
            Blog HIMARPL
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://pmb.himarpl.com"
          >
            Penerimaan Mahasiswa Baru HIMARPL
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://upi.edu/"
          >
            Universitas Pendidikan Indonesia
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://rpl.upi.edu/"
          >
            Rekayasa Perangkat Lunak UPI
          </Link>
        </li>
      </ul>
    </div>
  );
}

function MediaPartner() {
  return (
    <div>
      <h4 className="scroll-m-20 font-serif text-lg font-semibold tracking-wide">
        Media Partner
      </h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-primary-200 hover:underline"
            href="https://github.com/himarplupi/assets-himarpl/blob/main/media-partner/syarat-dan-ketentuan.md"
          >
            Syarat dan Ketentuan
          </Link>
        </li>
      </ul>
    </div>
  );
}
