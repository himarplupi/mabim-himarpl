import { FAQAccordions } from "@/components/common/faq-accordions";
import { BlurFade } from "@/components/ui/blur-fade";

export function FaqSection() {
  return (
    <section id="faq" className="container relative z-10 space-y-4">
      <BlurFade inView delay={0.25 * 2}>
        <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50 md:text-4xl">
          FAQ
        </h2>
      </BlurFade>

      <FAQAccordions />
    </section>
  );
}
