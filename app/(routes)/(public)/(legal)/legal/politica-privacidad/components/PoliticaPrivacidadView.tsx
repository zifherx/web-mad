import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { PrivacidadSection } from "./PrivacidadSection";
import { ProtectionNoticeSection } from "./ProtectionNoticeSection";

export function PoliticaPrivacidadView() {
  return (
    <>
      <HeroSection />
      <PrivacidadSection />
      <ProtectionNoticeSection />
      <CTASection />
    </>
  );
}
