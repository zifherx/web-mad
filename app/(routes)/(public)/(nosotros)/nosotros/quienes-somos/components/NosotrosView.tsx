import { HeroSection } from "./HeroSection";
import { HistoriaSection } from "./HistoriaSection";
import { MisionVisionSection } from "./MisionVisionSection";
import { ValoresSection } from "./ValoresSection";
import { DiagramaSection } from "./DiagramaSection";
import { CTASection } from "./CTASection";

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
