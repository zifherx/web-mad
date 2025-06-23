"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BannerCarruselData } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarruselHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BannerCarruselData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BannerCarruselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + BannerCarruselData.length) % BannerCarruselData.length
    );
  };

  return (
    <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <AnimatePresence mode="wait">
          {BannerCarruselData.map((slide, index) => {
            if (index !== currentSlide) return null;

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`space-y-6 ${isEven ? "" : "md:col-start-2"}`}
                >
                  <div className="space-y-4">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="inline-block px-4 py-2 bg-redCustom/10 text-redCustom rounded-full text-sm font-semibold"
                    >
                      {slide.category}
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-lg lg:text-xl text-gray-600 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-redCustom hover:bg-orangeCustom hover:scale-110 transition-all duration-300"
                    >
                      <Link href={slide.btnCTA1.buttonHref}>
                        {slide.btnCTA1.buttonText}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-redCustom text-orangeCustom hover:bg-orangeCustom hover:text-white hover:border-none md:animate-bounce"
                    >
                      <Link href={slide.btnCTA2.buttonHref}>
                        {slide.btnCTA2.buttonText}
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`relative ${isEven ? "" : "md:col-start-1"}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={`/images/banners/${slide.imageItem.imageSource}`}
                      alt={slide.imageItem.imageAlt}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-redCustom/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orangeCustom/20 rounded-full blur-xl" />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button> */}

          <div className="flex space-x-2">
            {BannerCarruselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-redCustom scale-125"
                    : "border border-gray-400 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button> */}
        </div>
      </div>
    </section>
  );
}
