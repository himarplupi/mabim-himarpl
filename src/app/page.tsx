import { Separator } from "@/components/ornament/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-primary-600 px-6">
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-3">
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
          <Button variant="outline">
            BOOKLET
          </Button>
          <Button variant="outline">TWIBBON</Button>
        </BlurFade>
      </div>
    </main>
  );
}
