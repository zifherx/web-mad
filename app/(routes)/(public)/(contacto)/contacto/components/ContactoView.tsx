import { ContactFormSection } from "./ContactFormSection";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";

export function ContactoView() {
  return (
    <div>
      <HeroSection />
      <ContactFormSection />
      <CTASection />
    </div>
  );
}
