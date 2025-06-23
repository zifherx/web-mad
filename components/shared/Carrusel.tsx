"use client";

import { useEffect, useState } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import { ItemLogo } from "./ItemLogo";

import { CarruselCustomProp } from "@/types";

export function Carrusel({ images }: CarruselCustomProp) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plugin, setPlugin] = useState<AutoplayType | null>(null);

  useEffect(() => {
    if (!plugin) {
      setPlugin(
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        })
      );
    }
  }, [plugin]);

  return (
    <>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={plugin ? [plugin] : undefined}
        className="w-full"
        onMouseEnter={() => plugin?.stop()}
        onMouseLeave={() => plugin?.play()}
      >
        <CarouselContent>
          {images.map((partner) => (
            <CarouselItem
              key={partner.id}
              className="basis-3/6 md:basis-1/6 lg:basis-1/6 p-2"
            >
              <ItemLogo partner={partner} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(images.length / 6) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                plugin?.stop();
                setTimeout(() => plugin?.play(), 300);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === Math.floor(activeIndex / 6)
                  ? "bg-redCustom"
                  : "bg-gray-300"
              }`}
              aria-label={`Ir al grupo ${index + 1} de socios`}
            />
          )
        )}
      </div>
    </>
  );
}
