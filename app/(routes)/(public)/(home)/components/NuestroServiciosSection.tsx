"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { CardService } from "@/components/shared/CardService";
import { Title } from "@/components/shared/Title";

import { ServiceCardData } from "@/data";

export function NuestroServiciosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orangeCustom/10 text-orangeCustom rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <Title
            text="Soluciones que Transforman tu Negocio"
            description="Desde estrategia hasta ejecución, te acompañamos en cada paso de tu tranformación digital"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {ServiceCardData.map(
            ({
              id,
              descriptionService,
              icon,
              titleService,
              slug,
              features,
            }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <CardService
                  id={id}
                  titleService={titleService}
                  descriptionService={descriptionService}
                  icon={icon}
                  slug={slug}
                  features={features}
                />
              </motion.div>
            )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-orangeCustom hover:bg-orangeCustom/80"
            asChild
          >
            <Link href="/servicios">
              Ver Todos los Servicios
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
