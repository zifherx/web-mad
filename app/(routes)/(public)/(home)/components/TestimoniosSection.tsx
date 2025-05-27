"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardTestimonial } from "@/components/shared/CardTestimonial";
import { Title } from "@/components/shared/Title";

import { NUMERIC } from "@/utils/Constants";

import { TestimonialCardData } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimoniosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = NUMERIC.CUATRO;

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerView >= TestimonialCardData.length
        ? 0
        : prevIndex + testimonialsPerView
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, TestimonialCardData.length - testimonialsPerView)
        : Math.max(0, prevIndex - testimonialsPerView)
    );
  };

  const visibleTestimonials = TestimonialCardData.slice(
    currentIndex,
    currentIndex + testimonialsPerView
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto md:px-6">
        <Title
          text="Lo Que Dicen Nuestros Clientes"
          description="Testimonios reales de empresarios y profesionales que han transformado sus negocios con nosotros"
        />
        <div className="relative w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {visibleTestimonials.map(
              ({ id, imageSource, position, quote, title }) => (
                <CardTestimonial
                  key={id}
                  id={id}
                  imageSource={imageSource}
                  position={position}
                  quote={quote}
                  title={title}
                />
              )
            )}
          </div>
          <Button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 bg-white text-redCustom hover:bg-gray-100 rounded-full p-3 shadow-lg  transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Testimonios anteriores"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 bg-white text-redCustom hover:bg-gray-100 rounded-full p-3 shadow-lg  transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Testimonios siguientes"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(TestimonialCardData.length / testimonialsPerView),
          }).map((_, index) => (
            <Button
              key={index}
              className={`w-3 h-3 rounded-full hover:bg-orangeCustom transition-colors ${
                Math.floor(currentIndex / testimonialsPerView) === index
                  ? "bg-redCustom"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * testimonialsPerView)}
              aria-label={`Ir al grupo ${index + 1} de testimonios`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
