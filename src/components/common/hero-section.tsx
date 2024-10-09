import { Separator } from "@/components/ornament/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

export function HeroSection() {
  return (
    <section className="container relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-y-3">
      <BlurFade delay={0.25} inView>
        <h1 className="text-center font-zelda text-5xl leading-tight tracking-wider text-neutral-50 md:text-7xl">
          EXPLORING MABIM IN{" "}
          <SparklesText
            text="WONDERLAND"
            className="text-5xl font-normal leading-tight tracking-wider text-neutral-50 md:text-7xl"
          />
        </h1>
      </BlurFade>

      <BlurFade delay={0.25 * 2} inView>
        <Separator
          className="w-full max-w-96"
          pathClassName="fill-primary-foreground"
        />
      </BlurFade>

      <BlurFade delay={0.25 * 4} inView>
        <p className="max-w-[640px] text-center font-bonobo text-neutral-50 md:text-lg">
          {`"Membangun Kepemimpinan Diri di Era Revolusi Industri: Transformasi Diri untuk Masa Depan Digital"`}
        </p>
      </BlurFade>

      <BlurFade
        delay={0.25 * 6}
        inView
        className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6"
      >
        <Button variant="outline" className="w-full sm:w-52">
          BOOKLET
        </Button>
        <Button variant="outline" className="w-full sm:w-52">
          TWIBBON
        </Button>
      </BlurFade>
    </section>
  );
}
