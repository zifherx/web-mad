import { HeroSection } from "./components/HeroSection";
import { CarruselHeroSection } from "./components/CarruselHeroSection";
import { CounterSection } from "./components/CounterSection";
import { QuienesSomosSection } from "./components/QuienesSomosSection";
import { NuestroServiciosSection } from "./components/NuestroServiciosSection";
import { TestimoniosSection } from "./components/TestimoniosSection";
import { CallToActionSection } from "./components/CallToActionSection";
import { SociosEstrategicosSection } from "./components/SociosEstrategicosSection";

export default function HomePage() {
  return (
    <div>
      <CarruselHeroSection />
      {/* <HeroSection /> */}
      <CounterSection />
      <QuienesSomosSection />
      <NuestroServiciosSection />
      <SociosEstrategicosSection />
      <TestimoniosSection />
      <CallToActionSection />
    </div>
  );
}
