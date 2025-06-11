"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BannerItem } from "@/components/shared/BannerItem";

import { BannerCarruselData } from "@/data";

export function CarruselHeroSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <section className="relative">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {BannerCarruselData.map((banner) => (
            <CarouselItem key={banner.id}>
              <BannerItem banner={banner} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-white/20 text-black hover:bg-white/40 border-white/20" />
          <CarouselNext className="relative right-0 top-0 translate-y-0 bg-white/20 text-black hover:bg-white/40 border-white/20" />
        </div>
      </Carousel>
    </section>
  );
}
