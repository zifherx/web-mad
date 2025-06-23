"use client";

import { Title } from "@/components/shared/Title";
import { Carrusel } from "@/components/shared/Carrusel";

import { SociosEstrategicosData } from "@/data";

export function SociosEstrategicosSection() {
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
