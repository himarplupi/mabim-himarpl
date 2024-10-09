import { Decorations } from "@/components/common/decorations";
import { FaqSection } from "@/components/common/faq-section";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { HeroSection } from "@/components/common/hero-section";
import { KelompokSection } from "@/components/common/kelompok-section";
import { SponsorMediaSection } from "@/components/common/sponsor-media-section";
import { TimelineSection } from "@/components/common/timeline-section";
import { CountdownTabs } from "@/components/ui/countdown-tabs";

export const dynamic = "force-static";

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
        <HeroSection />
      </div>

      <Decorations />

      <div className="bg-primary-700/95 pt-96">
        <KelompokSection />
      </div>

      <div className="bg-primary-700/95 pt-64">
        <CountdownTabs />
      </div>

      <div className="bg-primary-700/95 pt-64">
        <TimelineSection />
      </div>

      <div className="bg-primary-700/95 pt-64">
        <FaqSection />
      </div>

      <div className="bg-primary-700/95 pt-64">
        <SponsorMediaSection />
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
