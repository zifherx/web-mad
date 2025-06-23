"use client";

<<<<<<< HEAD
import { Title } from "@/components/shared/Title";
import { Carrusel } from "@/components/shared/Carrusel";

import { SociosEstrategicosData } from "@/data";

export function SociosEstrategicosSection() {
=======
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

>>>>>>> 29432971d370740ac9239b99b0c79fe99ef4be2b
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
<<<<<<< HEAD
          text="Socios Estratégicos"
          description="Trabajamos con las mejores empresas del mundo para ofrecerle soluciones de clase mundial"
=======
          text="Empresas Que Confían En Nosotros"
          description="Más de 500 empresas han transformado sus negocios con nuestras estrategias y soluciones"
>>>>>>> 29432971d370740ac9239b99b0c79fe99ef4be2b
        />

        <div className="relative">
          <Carrusel images={SociosEstrategicosData} />
        </div>
      </div>
    </section>
  );
}
