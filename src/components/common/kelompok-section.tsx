"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { BorderCorner } from "@/components/ornament/border";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";

import { type GroupMabim, groupMabim, type Mentee } from "./group-mabim";

export function KelompokSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mentee, setMentee] = useState<Mentee | undefined>();
  const [group, setGroup] = useState<GroupMabim | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    const currentGroup = groupMabim.find((group) =>
      group.mentees.some(
        (mentee) => mentee.name.toLowerCase() === name.toLowerCase(),
      ),
    );

    if (currentGroup) {
      const currentMentee = currentGroup.mentees.find(
        (mentee) => mentee.name.toLowerCase() === name.toLowerCase(),
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
      className="relative z-10 space-y-4 rounded-md bg-neutral-50 px-6 py-8 text-center"
    >
      <BorderCorner />

      <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-950">
        TEMUKAN KELOMPOK MABIM-KU
      </h2>

      <p className="text-center font-bonobo text-neutral-950">
        Cari kelompok dengan menuliskan nama lengkap kamu!
      </p>

      <div className="rounded-md bg-neutral-900 p-1">
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
        className="w-full"
        onClick={handleSearch}
      >
        CARI KELOMPOK
      </Button>

      {/* Not Found Dialog */}
      <Dialog open={isNotFound} onOpenChange={setIsNotFound}>
        <DialogContent className="bg-neutral-900 font-bonobo text-neutral-50">
          <DialogTitle hidden>Nama Tidak Ditemukan</DialogTitle>
          <DialogDescription hidden>
            Nama {name} tidak ditemukan.
          </DialogDescription>
          <div className="flex flex-col gap-4 pt-2">
            <p className="font-bonobo leading-5">
              {`Nama '${name}' tidak ditemukan. Silakan coba lagi dengan menuliskan
              nama lengkap, jika masih tidak ditemukan, harap hubungi kang bagas
              (advokastra)`}
            </p>
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
        <DialogContent className="bg-neutral-900 font-bonobo text-neutral-50">
          <DialogTitle hidden>Kelompok Ditemukan</DialogTitle>
          <DialogDescription hidden>
            Berikut ini adalah kelompok yang kamu cari
          </DialogDescription>

          <div className="flex flex-col gap-4 pt-2">
            <h3 className="text-center font-rock-n-roll-one text-2xl font-normal leading-tight tracking-wider">
              {`Kelompok ${group?.id}`}
            </h3>
            <h4 className="text-center font-bonobo capitalize">
              {group?.name}
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-bonobo leading-5">
                <span className="font-semibold">Mentor:</span>{" "}
                {group?.mentor.name}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
