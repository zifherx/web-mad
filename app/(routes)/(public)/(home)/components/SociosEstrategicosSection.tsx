"use client";

import { useEffect, useState } from "react";

import { Title } from "@/components/shared/Title";
import { Carrusel } from "@/components/shared/Carrusel";

import { SociosEstrategicosData } from "@/data";

export function SociosEstrategicosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % SociosEstrategicosData.length
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSocios = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % SociosEstrategicosData.length;
      visible.push(SociosEstrategicosData[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Socios Estratégicos"
          description="Trabajamos con las mejores empresas del mundo para ofrecerle soluciones de clase mundial"
        />

        <div className="relative">
          <Carrusel images={SociosEstrategicosData} />
        </div>
      </div>
    </section>
  );
}
