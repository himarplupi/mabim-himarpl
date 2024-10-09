import Image from "next/image";

import Vector1 from "@/assets/vector-1.svg";
import { Hieroglyph } from "@/components/ornament/hieroglyph";
import { Wave } from "@/components/ornament/wave";
import { BlurFade } from "@/components/ui/blur-fade";

export function Decorations() {
  return (
    <>
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
    </>
  );
}
