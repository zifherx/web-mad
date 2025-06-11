import { CTASection } from "./CTASection";
import { DiagramaSection } from "./DiagramaSection";
import { HeroSection } from "./HeroSection";
import { HistoriaSection } from "./HistoriaSection";
import { MisionVisionSection } from "./MisionVisionSection";
import { ValoresSection } from "./ValoresSection";

export function NosotrosView() {
  return (
    <div>
      <HeroSection />
      <HistoriaSection />
      <MisionVisionSection />
      <ValoresSection />
      <DiagramaSection />
      <CTASection />
    </div>
  );
}
