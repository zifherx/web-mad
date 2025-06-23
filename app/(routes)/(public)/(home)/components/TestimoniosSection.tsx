"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardTestimonial } from "@/components/shared/CardTestimonial";
import { Title } from "@/components/shared/Title";

import { NUMERIC } from "@/utils/Constants";

import { TestimonialCardData } from "@/data";

export function TestimoniosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = NUMERIC.CUATRO;

  const visibleTestimonials = TestimonialCardData.slice(
    currentIndex,
    currentIndex + testimonialsPerView
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
