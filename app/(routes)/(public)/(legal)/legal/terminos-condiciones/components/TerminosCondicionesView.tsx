import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { ImportantInformationSection } from "./ImportantInformationSection";
import { TerminosSection } from "./TerminosSection";

export function TerminosCondicionesView() {
  return (
    <>
      <HeroSection />
      <TerminosSection />
      <ImportantInformationSection />
      <CTASection />
    </>
  );
}
