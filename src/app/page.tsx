import Image from "next/image";

import Vector1 from "@/assets/vector-1.svg";
import { Separator } from "@/components/ornament/separator";
import { Wave } from "@/components/ornament/wave";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function HomePage() {
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
          {/* TODO: Ini nanti pindah footer aja tujuannya */}
          {/* <p className="font-bonobo text-center text-primary-foreground">
          Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
          mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
          dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
          Cibiru.
        </p> */}

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

      <div className="absolute top-[550px] z-[5] h-64 w-[512px] scale-150">
        <BlurFade delay={0.25 * 8} inView className="relative h-full w-full">
          {/* eslint-disable-next-line  */}
          <Image src={Vector1} alt="Vector 1" fill />
        </BlurFade>
      </div>

      <Wave className="absolute -left-32 bottom-64 opacity-50" />

      <Wave className="absolute -bottom-64 -left-32 rotate-180 opacity-50" />

      <div className="bg-primary-700/95 pt-32">
        <section className="relative z-10">
          <h2 className="font-rock-n-roll-one text-center text-3xl font-normal leading-tight tracking-wider text-neutral-50">
            TEMUKAN KELOMPOK MABIM-KU
          </h2>
          <p className="text-center font-bonobo text-neutral-50">
            Cari kelompok dengan menuliskan nama lengkap kamu!
          </p>
        </section>
      </div>
    </main>
  );
}
