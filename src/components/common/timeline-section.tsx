import { Timeline } from "@/components/common/timeline";
import { BorderCorner } from "@/components/ornament/border";
import { BlurFade } from "@/components/ui/blur-fade";

export function TimelineSection() {
  return (
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
  );
}
