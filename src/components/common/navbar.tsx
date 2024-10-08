"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

import LogoMabim from "@/assets/logo-mabim.svg";
import { MenuIndicator } from "@/components/ornament/indicator";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/medieval-sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    name: "Beranda",
    href: "#main",
  },
  {
    name: "Countdown",
    href: "#countdown",
  },
  {
    name: "Kelompok",
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

export function Navbar() {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 mx-auto">
      <nav className="container flex items-center justify-between bg-primary-950">
        <div className="flex items-center gap-x-4">
          <div className="relative h-12 w-12">
            <Image
              // eslint-disable-next-line
              src={LogoMabim}
              alt="Logo Mabim"
              className="absolute -bottom-2 left-0 h-12 w-12"
            />
          </div>
          <h3 className="font-zelda text-2xl tracking-tight text-primary-50">
            MABIMRPL 2024
          </h3>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="bg-primary-950 hover:bg-primary-900">
              <MenuIndicator pathClassName="fill-primary-50" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="relative z-50 mt-4 flex flex-col gap-4 text-neutral-50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(buttonVariants(), "w-full")}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    lenis?.scrollTo(link.href, {
                      offset: link.href !== "#main" ? -64 : 0,
                    });
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
