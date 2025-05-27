import { CarruselHeroSection } from "./components/CarruselHeroSection";
import { CounterSection } from "./components/CounterSection";
import { QuienesSomosSection } from "./components/QuienesSomosSection";
import { NuestroServiciosSection } from "./components/NuestroServiciosSection";
import { TestimoniosSection } from "./components/TestimoniosSection";
import { CallToActionSection } from "./components/CallToActionSection";

export default function HomePage() {
  return (
    <>
      <CarruselHeroSection />
      {/* <HeroSection /> */}
      <CounterSection />
      <QuienesSomosSection />
      <NuestroServiciosSection />
      <p>Socios Estrátegicos</p>
      <TestimoniosSection />
      <div>Reseñas</div>
      <CallToActionSection />
    </>
  );
}
