"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardService } from "@/components/shared/CardService";
import { Title } from "@/components/shared/Title";

import { ServiceCardData } from "@/data";

export function NuestroServiciosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestros Servicios"
          description="Ofrecemos soluciones integrales para potenciar tu negocio y alcanzar tus objetivos empresariales"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServiceCardData.map(
            ({ id, descriptionService, icon, titleService, slug }) => (
              <CardService
                key={id}
                id={id}
                titleService={titleService}
                descriptionService={descriptionService}
                icon={icon}
                slug={slug}
              />
            )
          )}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="h-12 rounded-md bg-redCustom px-8 text-lg text-white shadow transition-colors hover:bg-redCustom/80 focus-visible:outline-none focus-visible:ring-1 hover:scale-105"
            asChild
          >
            <Link href="/servicios">
              Ver Todos los Servicios
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
