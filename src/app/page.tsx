import Image from "next/image";

import Vector1 from "@/assets/vector-1.svg";
import { FAQAccordions } from "@/components/common/faq-accordions";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { KelompokSection } from "@/components/common/kelompok-section";
import { Timeline } from "@/components/common/timeline";
import { BorderCorner } from "@/components/ornament/border";
import { Hieroglyph } from "@/components/ornament/hieroglyph";
import { Separator } from "@/components/ornament/separator";
import { Wave } from "@/components/ornament/wave";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { CountdownTabs } from "@/components/ui/countdown-tabs";
import { Marquee } from "@/components/ui/marquee";
import { SparklesText } from "@/components/ui/sparkles-text";

const tabData = [
  { label: "TM", date: "2024-10-19" },
  { label: "Day-1", date: "2024-10-26" },
  { label: "Day-2", date: "2024-11-02" },
  { label: "Day-3", date: "2024-11-03" },
  { label: "Day-4", date: "2024-11-09" },
];

const sponsorMediaPartners = [
  {
    name: "PT. ABC",
    logo: null,
  },
  {
    name: "PT. DEF",
    logo: null,
  },
  {
    name: "PT. GHI",
    logo: null,
  },
  {
    name: "PT. JKL",
    logo: null,
  },
  {
    name: "PT. MNO",
    logo: null,
  },
];

const firstRow = sponsorMediaPartners.slice(0, sponsorMediaPartners.length / 2);
const secondRow = sponsorMediaPartners.slice(sponsorMediaPartners.length / 2);

const SponsorMediaPartnerCard = ({ logo }: { logo: string | null }) => {
  return (
    <figure className="relative aspect-video h-32 w-64 cursor-pointer overflow-hidden rounded-xl border bg-neutral-400 p-4">
      {logo && <Image fill alt="" src={logo} />}
    </figure>
  );
};

export default function HomePage() {
  return (
    <main
      id="main"
      className="relative min-h-screen overflow-hidden bg-[length:512px_512px] bg-repeat"
      style={{
        backgroundImage: "url(./assets/main-pattern.webp)",
      }}
    >
      <div className="bg-gradient-to-b from-primary-600/95 to-primary-700/95">
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
      </div>

      <div className="absolute top-[650px] z-[5] h-64 w-[512px] scale-150 sm:w-full md:top-[550px]">
        <BlurFade delay={0.25 * 8} inView className="relative h-full w-full">
          {/* eslint-disable-next-line  */}
          <Image src={Vector1} alt="Vector 1" fill />
        </BlurFade>
      </div>

      <div className="absolute left-0 right-0 top-[825px] z-[10] opacity-75 sm:top-[850px] md:top-[768px] lg:top-[825px]">
        <Hieroglyph length={32} className="text-primary-950" />
      </div>

      <Wave className="absolute -left-8 top-10 opacity-50 sm:left-0 sm:w-full md:top-10" />

      <Wave className="absolute -left-8 top-[700px] rotate-180 opacity-50 sm:left-0 sm:w-full md:top-[700px]" />

      <div className="bg-primary-700/95 pt-96">
        <BlurFade inView delay={0.25 * 2} className="sm:container">
          <KelompokSection />
        </BlurFade>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <CountdownTabs tabs={tabData} />
      </div>

      <div className="bg-primary-700/95 pt-64">
        <BlurFade delay={0.25} inView className="sm:container">
          <section
            id="timeline"
            className="relative z-10 rounded-md bg-neutral-50 px-12 py-6"
          >
            <BorderCorner />
            <h2 className="pb-8 text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-950 md:text-4xl">
              TIMELINE
            </h2>

            <Timeline />
          </section>
        </BlurFade>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <section id="faq" className="container relative z-10 space-y-4">
          <BlurFade inView delay={0.25 * 2}>
            <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50 md:text-4xl">
              FAQ
            </h2>
          </BlurFade>

          <FAQAccordions />
        </section>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <section className="container relative z-10 space-y-4">
          <BlurFade inView delay={0.25 * 2}>
            <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50 md:text-4xl">
              SPONSOR & MEDIA PARTNER
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.25 * 4}>
            <Marquee pauseOnHover className="[--duration:10s]">
              {firstRow.map((sponsorMediaPartner) => (
                <SponsorMediaPartnerCard
                  key={sponsorMediaPartner.name}
                  {...sponsorMediaPartner}
                />
              ))}
            </Marquee>
          </BlurFade>
          <BlurFade inView delay={0.25 * 6}>
            <Marquee reverse pauseOnHover className="[--duration:10s]">
              {secondRow.map((sponsorMediaPartner) => (
                <SponsorMediaPartnerCard
                  key={sponsorMediaPartner.name}
                  {...sponsorMediaPartner}
                />
              ))}
            </Marquee>
          </BlurFade>
        </section>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <Footer />
      </div>

      <div>
        <GlobalFooter />
      </div>
    </main>
  );
}
