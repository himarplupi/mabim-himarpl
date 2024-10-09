"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from Framer Motion
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
    name: "Kelompok",
    href: "#kelompok",
  },
  {
    name: "Countdown",
    href: "#countdown",
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
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 md:left-2 md:right-2 md:top-2"
      initial={{ y: -100 }} // Start position (off-screen)
      animate={{ y: 0 }} // End position (on-screen)
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        delay: 2.5,
      }}
    >
      <nav className="container flex items-center justify-between bg-primary-950 md:rounded-md">
        <div className="flex items-center gap-x-4 md:gap-x-6 md:py-2">
          <div className="relative h-12 w-14">
            <Image
              // eslint-disable-next-line
              src={LogoMabim}
              alt="Logo Mabim"
              className="absolute -bottom-3 left-0 h-14 w-14 md:-bottom-4 md:scale-125"
            />
          </div>
          <h3 className="font-zelda text-2xl tracking-wider text-primary-50 md:text-3xl">
            MABIMRPL 2024
          </h3>
        </div>

        <div className="hidden items-center gap-x-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "p-1 font-bonobo text-neutral-200 lg:text-lg",
              )}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                lenis?.scrollTo(link.href, {
                  offset: link.href !== "#main" ? -96 : 0,
                });
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="bg-primary-950 hover:bg-primary-900 md:hidden"
            >
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
    </motion.div>
  );
}
