"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Title } from "@/components/shared/Title";

import { SociosEstrategicosData } from "@/data";
import { cn } from "@/lib/utils";
import { Carrusel } from "@/components/shared/Carrusel";

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
          text="Empresas Que Confían En Nosotros"
          description="Más de 500 empresas han transformado sus negocios con nuestras estrategias y soluciones"
        />

        <div className="relative">
          <Carrusel images={SociosEstrategicosData} />
        </div>
      </div>
    </section>
  );
}
