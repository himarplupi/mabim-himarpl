import Image, { type StaticImageData } from "next/image";

import LogoAlloBank from "@/assets/sponsors/LogoAlloBank.png";
import LogoKahf from "@/assets/sponsors/LogoKahf.png";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "PT. PT Paragon Technology and Innovation",
    logo: LogoKahf,
  },
  {
    name: "PT. PT Allo Bank Indonesia Tbk",
    logo: LogoAlloBank,
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

const SponsorMediaPartnerCard = ({
  logo,
}: {
  logo: StaticImageData | null;
}) => {
  return (
    <figure className="relative aspect-video h-32 w-64 cursor-pointer overflow-hidden rounded-xl border bg-neutral-400 p-4">
      {logo && <Image fill alt="" src={logo} />}
    </figure>
  );
};

export function SponsorMediaSection() {
  return (
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
              logo={sponsorMediaPartner.logo}
            />
          ))}
        </Marquee>
      </BlurFade>
      <BlurFade inView delay={0.25 * 6}>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((sponsorMediaPartner) => (
            <SponsorMediaPartnerCard
              key={sponsorMediaPartner.name}
              logo={sponsorMediaPartner.logo}
            />
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}
