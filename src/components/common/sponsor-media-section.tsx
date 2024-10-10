import Image, { type StaticImageData } from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import LogoAlloBank from "@/assets/sponsors/LogoAlloBank.png";
import LogoKahf from "@/assets/sponsors/LogoKahf.png"
import LogoRuru from "@/assets/sponsors/LogoRuru.jpg"
import LogoMenyala from "@/assets/sponsors/LogoMenyala.png"

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "PT Paragon Technology and Innovation",
    logo: LogoKahf,
  },
  {
    name: "PT Allo Bank Indonesia Tbk",
    logo: LogoAlloBank,
  },
  {
    name: "Menyala by OCBC",
    logo: LogoRuru,
  },
  {
    name: "Ruru Snack",
    logo: LogoMenyala,
  },
];

const firstRow = sponsorMediaPartners.slice(0, sponsorMediaPartners.length / 2);
const secondRow = sponsorMediaPartners.slice(sponsorMediaPartners.length / 2);

const SponsorMediaPartnerCard = ({ logo }: { logo: StaticImageData | null }) => {
  return (
    <figure className="relative aspect-video h full h-32 w-full w-auto cursor-pointer object-contain object-center overflow-hidden flex items-center justify-center rounded-xl p-4">
      {logo && 
      <Image 
        src={logo}
        alt="Sponsor or Media Partner Logo"
        style={{ maxHeight: '150%', maxWidth: '100%' }}
      />}
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
