import Image from "next/image";

import Vector1 from "@/assets/vector-1.svg";
import { FAQAccordions } from "@/components/common/faq-accordions";
import { BorderCorner } from "@/components/ornament/border";
import { Hieroglyph } from "@/components/ornament/hieroglyph";
import { Separator } from "@/components/ornament/separator";
import { Wave } from "@/components/ornament/wave";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { CountdownTabs } from "@/components/ui/countdown-tabs";
import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function HomePage() {
  const tabData = [
    { label: "TM", date: "2024-10-19" },
    { label: "Day-1", date: "2024-10-26" },
    { label: "Day-2", date: "2024-11-02" },
    { label: "Day-3", date: "2024-11-03" },
    { label: "Day-4", date: "2024-11-09" },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[length:512px_512px] bg-repeat"
      style={{
        backgroundImage: "url(./assets/main-pattern.webp)",
      }}
    >
      <div className="bg-gradient-to-b from-primary-600/95 to-primary-700/95 px-6">
        <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-y-3">
          <BlurFade delay={0.25} inView>
            <h1 className="text-center font-zelda text-5xl leading-tight tracking-wider text-neutral-50">
              EXPLORING MABIM IN{" "}
              <SparklesText
                text="WONDERLAND"
                className="text-5xl font-normal leading-tight tracking-wider text-neutral-50"
              />
            </h1>
          </BlurFade>

          <BlurFade delay={0.25 * 2} inView>
            <Separator
              className="w-full"
              pathClassName="fill-primary-foreground"
            />
          </BlurFade>

          <BlurFade delay={0.25 * 3} inView>
            <p className="text-center font-bonobo text-neutral-50">
              {`"Membangun Kepemimpinan Diri di Era Revolusi Industri: Transformasi Diri untuk Masa Depan Digital"`}
            </p>
          </BlurFade>

          <BlurFade
            delay={0.25 * 4}
            inView
            className="mt-4 flex w-full flex-col gap-3"
          >
            <Button variant="outline">BOOKLET</Button>
            <Button variant="outline">TWIBBON</Button>
          </BlurFade>
        </section>
      </div>

      <div className="absolute top-[650px] z-[5] h-64 w-[512px] scale-150">
        <BlurFade delay={0.25 * 8} inView className="relative h-full w-full">
          {/* eslint-disable-next-line  */}
          <Image src={Vector1} alt="Vector 1" fill />
        </BlurFade>
      </div>

      <div className="absolute left-0 right-0 top-[825px] z-[10] opacity-75">
        <Hieroglyph length={32} className="text-primary-950" />
      </div>

      <Wave className="absolute -left-32 bottom-64 opacity-50" />

      <Wave className="absolute -bottom-64 -left-32 rotate-180 opacity-50" />

      <div className="bg-primary-700/95 pt-96">
        <section className="relative z-10 space-y-4 rounded-md bg-neutral-50 px-6 py-8 text-center">
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
              className="border-neutral-50/40 bg-neutral-900 text-neutral-200"
            />
          </div>

          <Button className="w-full">CARI KELOMPOK</Button>
        </section>
      </div>

      {/* Tabs Component */}
      <div className="bg-primary-600/95 pt-32">
        <CountdownTabs tabs={tabData} />
      </div>

      {/* New Timeline Section */}
      <div className="bg-primary-700/95 pt-32">
        <section className="relative z-10">
          <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50">
            TIMELINE
          </h2>
          <ul className="text-neutral-50">
            <li>20 Desember 2029 - Day 1</li>
            <li>30 Desember 2029 - Day 2</li>
            <li>3 Januari 2030 - Day 3</li>
            <li>15 Januari 2030 - Day 4</li>
          </ul>
        </section>
      </div>

      <div className="bg-primary-700/95 pt-32">
        <section className="relative z-10 mb-64 space-y-4 px-3">
          <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50">
            FAQ
          </h2>

          <FAQAccordions />
        </section>
      </div>
    </main>
  );
}
