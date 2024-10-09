"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

import {
  type GroupMabim,
  groupMabim,
  type Mentee,
} from "@/components/common/group-mabim";
import { BorderCorner } from "@/components/ornament/border";
import {
  DoubleSwordIndicator,
  SwordIndicator,
} from "@/components/ornament/indicator";
import { Separator } from "@/components/ornament/separator";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Share1Icon } from "@radix-ui/react-icons";

export function KelompokSection() {
  const lenis = useLenis();
  const [name, setName] = useState("Sandy Saputra");
  const [mentee, setMentee] = useState<Mentee | undefined>();
  const [group, setGroup] = useState<GroupMabim | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen || isNotFound) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isNotFound]);

  const handleSearch = () => {
    const cleanName = name.toLowerCase().trim();
    const currentGroup = groupMabim.find((group) =>
      group.mentees.some((mentee) => mentee.name.toLowerCase() === cleanName),
    );

    if (currentGroup) {
      const currentMentee = currentGroup.mentees.find(
        (mentee) => mentee.name.toLowerCase() === cleanName,
      );
      setIsNotFound(false);
      setGroup(currentGroup);
      setMentee(currentMentee);
      setIsOpen(true);
    } else {
      setIsNotFound(true);
    }
  };

  return (
    <section
      id="kelompok"
      className="relative z-10 mx-auto max-w-screen-md rounded-md bg-neutral-50 px-6 py-8 text-center"
    >
      <BorderCorner />

      <div className="container space-y-3">
        <h2 className="mx-auto max-w-[512px] pb-2 text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-950 md:text-4xl">
          TEMUKAN KELOMPOK MABIM-KU
        </h2>

        <p className="text-center font-bonobo text-neutral-950 md:text-lg">
          Cari kelompok dengan menuliskan nama lengkap kamu!
        </p>

        <div className="mx-auto max-w-64 rounded-md bg-neutral-900 p-1">
          <Input
            type="text"
            placeholder="Ketik disini..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (name.length > 0) {
                  handleSearch();
                }
              }
            }}
            className="border-neutral-50/40 bg-neutral-900 text-neutral-200"
          />
        </div>

        <Button
          disabled={name.length === 0}
          className="mx-auto w-full max-w-64"
          onClick={handleSearch}
        >
          CARI KELOMPOK
        </Button>
      </div>

      {/* Not Found Dialog */}
      <Dialog open={isNotFound} onOpenChange={setIsNotFound}>
        <DialogContent className="bg-neutral-900 font-bonobo text-neutral-50">
          <DialogTitle hidden>Nama tidak ditemukan</DialogTitle>
          <DialogDescription hidden>
            Nama {name} tidak ditemukan.
          </DialogDescription>
          <div className="flex flex-col gap-4 pt-2">
            <Separator pathClassName="fill-neutral-50/20" />
            <p className="font-bonobo text-lg font-semibold leading-5 text-neutral-100">{`Nama '${name}' tidak ditemukan`}</p>
            <p className="font-bonobo leading-5 text-neutral-300">
              {`Silakan coba lagi dengan menuliskan
              nama lengkap, jika masih tidak ditemukan, harap hubungi kang bagas
              (advokastra)`}
            </p>
            <Separator pathClassName="fill-neutral-50/20" />
          </div>
          <DialogFooter>
            <Link
              href="https://wa.me/+628588572502762"
              target="_blank"
              className={cn(buttonVariants())}
            >
              Hubungi Kang Bagas
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Found Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="overflow-hidden bg-neutral-900 p-8 font-bonobo text-neutral-50">
          <BorderCorner pathClassName="fill-neutral-50/50" />

          <DialogTitle hidden>Kelompok Ditemukan</DialogTitle>
          <DialogDescription hidden>
            Berikut ini adalah kelompok yang kamu cari
          </DialogDescription>

          <div className="flex min-h-[350px] flex-col gap-y-2 pt-2">
            <div className="space-y-1">
              <h3 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wide">
                {`Kelompok ${group?.id}`}
              </h3>

              <h4 className="text-center font-rock-n-roll-one text-2xl capitalize">
                {group?.name}
              </h4>
            </div>

            <h4 className="text-center font-rock-n-roll-one text-lg capitalize">
              {mentee?.id} - {mentee?.name}
            </h4>
          </div>

          <div className="relative flex flex-col gap-2 rounded-md border border-neutral-50/75 bg-primary-800/75 p-3">
            <h4 className="pb-4 font-rock-n-roll-one text-lg capitalize leading-5">
              {group?.mentor.name.toLowerCase()}
            </h4>

            <Separator
              pathClassName="fill-neutral-50/20"
              className="absolute left-0 top-7 w-full"
            />

            <div className="flex gap-4">
              <p className="flex items-center gap-2 rounded-sm bg-neutral-900/25 px-3 py-1 font-rock-n-roll-one text-sm leading-5 text-primary-300">
                <SwordIndicator
                  className="h-5 w-5"
                  pathClassName="fill-primary-300"
                />
                {group?.mentor.metadata.stats}
              </p>
              <p className="relative flex items-center gap-2 rounded-sm bg-neutral-900/25 px-3 py-1 font-rock-n-roll-one text-sm leading-5 text-primary-50">
                <BorderBeam
                  size={48}
                  duration={4}
                  colorFrom="#7CAD35"
                  colorTo="#5F8A26"
                />
                <DoubleSwordIndicator
                  className="h-5 w-5"
                  pathClassName="fill-primary-50"
                />
                {group?.mentor.metadata.skill}
              </p>
            </div>

            <p className="font-bonobo text-sm leading-5 text-neutral-300">
              {group?.mentor.metadata.description}
            </p>
          </div>

          <div className="absolute -bottom-8 left-0 right-0 -z-10 flex justify-center">
            {group?.mentor?.image && (
              <Image
                src={group?.mentor?.image}
                alt={group?.mentor?.name}
                className="h-[550px] w-full object-scale-down object-bottom"
              />
            )}
          </div>

          <DialogFooter className="flex flex-row justify-between gap-2 md:justify-between">
            <Button
              className={cn("text-neutral-950")}
              variant="outline"
              size="icon"
            >
              <Share1Icon />
            </Button>
            <Link
              href={`https://wa.me/${group?.mentor.phone}`}
              target="_blank"
              className={cn(buttonVariants())}
            >
              Hubungi Mentor
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
