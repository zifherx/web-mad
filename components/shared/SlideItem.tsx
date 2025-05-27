"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { SlideItemProp } from "@/types";
import { Button } from "../ui/button";

export function SlideItem({ slides }: SlideItemProp) {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}
          />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div
                className={`grid gap-6 md:grid-cols-2 md:gap-12 items-center ${
                  slide.layout === "right" ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 text-white ${
                    slide.layout === "right" ? "md:col-start-2" : ""
                  }`}
                >
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl leading-relaxed animate-accordion-down">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="" asChild>
                      <Link href={slide.btnCTA1.buttonHref}>
                        {slide.btnCTA1.buttonText}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white hover:bg-white hover:text-black"
                      asChild
                    >
                      <Link href={slide.btnCTA2.buttonHref}>
                        {slide.btnCTA2.buttonText}
                      </Link>
                    </Button>
                  </div>
                  {/* <Link
                    href={slide.btnCTA1.buttonHref}
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 animate-pulse-slow"
                  >
                    {slide.btnCTA1.buttonText}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link> */}
                </div>
                <div
                  className={`relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl ${
                    slide.layout === "right" ? "md:col-start-1" : ""
                  }`}
                >
                  <Image
                    src={`/images/banners/${slide.image}`}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setcurrentSlide(index)}
            className={`cursor-pointer w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
