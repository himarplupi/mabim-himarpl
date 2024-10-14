import Image, { type StaticImageData } from "next/image";

import LogoAlloBank from "@/assets/sponsors/LogoAlloBank.png";
import LogoDicoding from "@/assets/sponsors/LogoDicoding.png";
import LogoKahf from "@/assets/sponsors/LogoKahf.png";
import LogoMenyala from "@/assets/sponsors/LogoMenyala.png";
import LogoRuru from "@/assets/sponsors/LogoRuru.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "PT Dicoding Akademi Indonesia",
    logo: LogoDicoding,
  },
  {
    name: "PT Allo Bank Indonesia Tbk",
    logo: LogoAlloBank,
  },
  {
    name: "Ruru Snack",
    logo: LogoRuru,
  },
  {
    name: "PT Paragon Technology and Innovation",
    logo: LogoKahf,
  },
  {
    name: "Menyala by OCBC",
    logo: LogoMenyala,
  },
];

const firstRow = sponsorMediaPartners.slice(0, 3);
const secondRow = sponsorMediaPartners.slice(3);

const SponsorMediaPartnerCard = ({
  logo,
  size = "md",
}: {
  logo: StaticImageData | null;
  size?: "md" | "lg";
}) => {
  return (
    <figure
      className={cn(
        "relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-xl object-center p-4",
        size === "lg" ? "h-36 w-full" : "h-24 w-48",
      )}
    >
      {logo && (
        <Image
          src={logo}
          alt="Sponsor or Media Partner Logo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      )}
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
              size="lg"
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
