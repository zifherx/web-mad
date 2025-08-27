"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Title } from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Parrafo } from "@/components/shared/Parrafo";
import Image from "next/image";

export function QuienesSomosSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Quiénes Somos"
          description="Una comunidad joven que ha logrado reunir a lsor eferentes más importantes en Marketing, Ventas y Negocios"
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-5">
            <Parrafo
              align="justify"
              text="Marketing Al Día es una joven comunidad que ha logrado reunir a
              los referentes latinoamericanos y Europeos más importantes en
              Marketing, Ventas, Negocios, Liderazgo, Economía, Innovación,
              Finanzas, Psicología, Experiencia de Usuario y Experiencia de
              Cliente."
            />
            <Parrafo
              align="justify"
              text="Además de convocar a aquellos emprendedores de éxito referentes en
              sus respectivas industrias y que son un ejemplo para todos
              aquellos que tienen una idea de negocio o emprendimiento en curso."
            />
            <Button
              className="h-12 rounded-md bg-redCustom text-sm font-medium text-white shadow transition-colors hover:bg-redCustom/80 focus-visible:outline-none focus-visible:ring-1"
              asChild
            >
              <Link href="/quienes-somos">
                Conoce más Sobre Nosotros
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/portadas/quienes-somos.png"
              alt="Equipo de Marketing Al Día"
              fill
              className="object-contain md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
