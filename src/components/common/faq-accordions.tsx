"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import {
  BottomLeftCorner,
  BottomRightCorner,
  TopLeftCorner,
  TopRightCorner,
} from "@/components/ornament/border";
import { AbilityIndicator } from "@/components/ornament/indicator";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const faqs = [
  {
    id: "item-1",
    question: "Berapa Lama Mabim Dilaksanakan?",
    answer:
      "Mabim dilaksanakan selama 4 hari dalam kurun waktu 1 bulan, dimana setiap pelaksanaannya diadakan pada hari Sabtu, kecuali day 3 yang dilaksanakan pada hari Minggu.",
  },
  {
    id: "item-2",
    question: "Apa Singkatan dari Mabim?",
    answer:
      "Singkatan dari Mabim adalah Masa Bimbingan. Jadi, Mabim RPL artinya Masa Bimbingan yang dilaksanakan untuk mahasiswa baru dengan Prodi RPL atau Rekayasa Perangkat Lunak",
  },
  {
    id: "item-3",
    question: "Apa Gunanya Mabim?",
    answer:
      "Mabim sangat berguna untuk memperdalam pemahaman mahasiswa baru terkait prodi yang tengah mereka tempuh, jadi jangan sampai ga ikut ya!",
  },
  {
    id: "item-4",
    question: "Apakah Mabim Wajib?",
    answer:
      "Mabim ini diwajibkan untuk seluruh mahasiswa baru di Universitas Pendidikan Indonesia, jadi siap-siap ya!!",
  },
  {
    id: "item-5",
    question: "Apa yang Perlu Disiapkan untuk Mabim?",
    answer:
      "Untuk ikut Mabim itu sebenernya cuma perlu satu hal, yaitu Niat. Sisanya tinggal ikutin instruksi dari Mentornya aja deh :D",
  },
  {
    id: "item-6",
    question: "Mabim itu Santai apa Serius Banget?",
    answer:
      "Mabim ini ada waktunya santai, tapi juga ada waktu seriusnya. Jadi ga usah khawatir, ga akan seserius itu kok :)",
  },
];

export function FAQAccordions() {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <AccordionPrimitive.Root
      onValueChange={(value) => {
        setActiveIndex(value);
      }}
      type="single"
      collapsible
      className="w-full font-bonobo"
    >
      {faqs.map((faq) => (
        <AccordionPrimitive.AccordionItem key={faq.id} value={faq.id}>
          <AccordionPrimitive.AccordionTrigger className="relative flex w-full items-center gap-3 bg-neutral-900/80 px-5 py-3">
            {activeIndex === faq.id && (
              <motion.div
                className="absolute left-0 top-0 h-full w-full border border-neutral-100"
                initial={{ opacity: 0, scale: 0.95 }} // Initial state
                animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
                exit={{ opacity: 0, scale: 0.95 }} // Animate back to initial state on exit
                transition={{ duration: 0.3 }} // Duration of the animation
              >
                <TopLeftCorner
                  pathClassName="fill-neutral-100"
                  className="absolute -left-2 -top-2 scale-50"
                />
                <TopRightCorner
                  pathClassName="fill-neutral-100"
                  className="absolute -right-2 -top-2 scale-50"
                />
                <BottomLeftCorner
                  pathClassName="fill-neutral-100"
                  className="absolute -bottom-2 -left-2 scale-50"
                />
                <BottomRightCorner
                  pathClassName="fill-neutral-100"
                  className="absolute -bottom-2 -right-2 scale-50"
                />
              </motion.div>
            )}
            <AbilityIndicator
              className="h-5 w-5"
              pathClassName={cn(
                "transition-all duration-300 ease-in-out fill-neutral-400",
                activeIndex === faq.id && "fill-neutral-50",
              )}
            />
            <p className="text-left font-semibold text-neutral-50 md:text-lg">
              {faq.question}
            </p>
          </AccordionPrimitive.AccordionTrigger>
          <AccordionPrimitive.AccordionContent className="overflow-hidden py-2 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="bg-neutral-900/80 p-1">
              <div className="border border-primary-50/25 p-3 text-neutral-50 md:text-lg">
                {faq.answer}
              </div>
            </div>
          </AccordionPrimitive.AccordionContent>
        </AccordionPrimitive.AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}
