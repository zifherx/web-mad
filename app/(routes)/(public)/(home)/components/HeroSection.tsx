import { SlideItem } from "@/components/shared/SlideItem";
import { SlidesHeroData } from "@/data";

export function HeroSection() {
  return (
    <section className="relative">
      <SlideItem slides={SlidesHeroData} />
    </section>
  );
}
