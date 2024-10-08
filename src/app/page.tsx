import Image from "next/image";

import Vector1 from "@/assets/vector-1.svg";
import { FAQAccordions } from "@/components/common/faq-accordions";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { KelompokSection } from "@/components/common/kelompok-section";
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
    logo: "https://placehold.co/320x100/webp",
  },
  {
    name: "PT. DEF",
    logo: "https://placehold.co/320x100/webp",
  },
  {
    name: "PT. GHI",
    logo: "https://placehold.co/320x100/webp",
  },
  {
    name: "PT. JKL",
    logo: "https://placehold.co/320x100/webp",
  },
  {
    name: "PT. MNO",
    logo: "https://placehold.co/320x100/webp",
  },
];

const firstRow = sponsorMediaPartners.slice(0, sponsorMediaPartners.length / 2);
const secondRow = sponsorMediaPartners.slice(sponsorMediaPartners.length / 2);

const SponsorMediaPartnerCard = ({ logo }: { logo: string }) => {
  return (
    <figure className="relative aspect-video h-32 w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
      <Image fill alt="" src={logo} />
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

          <BlurFade delay={0.25 * 3} inView>
            <p className="max-w-[640px] text-center font-bonobo text-neutral-50 md:text-lg">
              {`"Membangun Kepemimpinan Diri di Era Revolusi Industri: Transformasi Diri untuk Masa Depan Digital"`}
            </p>
          </BlurFade>

          <BlurFade
            delay={0.25 * 4}
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
        <KelompokSection />
      </div>

      {/* Tabs Component */}
      <div className="bg-primary-700/95 pt-64">
        <CountdownTabs tabs={tabData} />
      </div>

      {/* New Timeline Section */}
      <div className="bg-primary-700/95 pt-64">
        <section
          id="timeline"
          className="relative z-10 rounded-md bg-neutral-50"
        >
          <BorderCorner />
          <h2 className="p-10 text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-950">
            TIMELINE
          </h2>
          <ul className="flex justify-center gap-10 font-bonobo font-bold text-neutral-950">
            <div>
              <div className="">
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="flex h-14 w-3 bg-neutral-400"></div>
              </div>
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-3 bg-neutral-400"></div>
              </div>
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-3 bg-neutral-400"></div>
              </div>
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-3 bg-neutral-400"></div>
              </div>
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
              </div>
            </div>
            <div>
              <div className="pb-12">
                <li className="text-left">19 Oktober 2024</li>
                <li className="text-left">Technical Meeting</li>
              </div>
              <div className="pb-12">
                <li className="text-left">26 Oktober 2024</li>
                <li className="text-left">Day 1</li>
              </div>
              <div className="pb-12">
                <li className="text-left">2 November 2024</li>
                <li className="text-left">Day 2</li>
              </div>
              <div className="pb-12">
                <li className="text-left">3 November 2024</li>
                <li className="text-left">Day 3</li>
              </div>
              <div className="pb-12">
                <li className="text-left">9 November 2024</li>
                <li className="text-left">Day 4</li>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-10 bg-neutral-400"></div>
              </div>
              <div className="">
                <li className="text-left">19 Oktober 2024</li>
                <li className="text-left">Technical Meeting</li>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-10 bg-neutral-400"></div>
              </div>
              <div>
                <li className="text-left">26 Oktober 2024</li>
                <li className="text-left">Day 1</li>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-10 bg-neutral-400"></div>
              </div>
              <div>
                <li className="text-left">2 November 2024</li>
                <li className="text-left">Day 2</li>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-10 bg-neutral-400"></div>
              </div>
              <div>
                <li className="text-left">3 November 2024</li>
                <li className="text-left">Day 3</li>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div>
                <div className="h-10 w-10 rounded-full bg-neutral-400"></div>
                <div className="h-14 w-10 bg-neutral-400"></div>
              </div>
              <div>
                <li className="text-left">9 November 2024</li>
                <li className="text-left">Day 4</li>
              </div>
            </div> */}
          </ul>
        </section>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <section id="faq" className="relative z-10 space-y-4 px-3">
          <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50">
            FAQ
          </h2>

          <FAQAccordions />
        </section>
      </div>

      <div className="bg-primary-700/95 pt-64">
        <section className="relative z-10 space-y-4 px-3">
          <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50">
            SPONSOR & MEDIA PARTNER
          </h2>

          <Marquee pauseOnHover className="[--duration:10s]">
            {firstRow.map((sponsorMediaPartner) => (
              <SponsorMediaPartnerCard
                key={sponsorMediaPartner.name}
                {...sponsorMediaPartner}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:10s]">
            {secondRow.map((sponsorMediaPartner) => (
              <SponsorMediaPartnerCard
                key={sponsorMediaPartner.name}
                {...sponsorMediaPartner}
              />
            ))}
          </Marquee>
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
