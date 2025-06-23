"use client";

import { motion } from "framer-motion";

import { GlobalCardService } from "@/components/shared/GlobalCardService";
import { Title } from "@/components/shared/Title";

import { CatalogoServiciosData } from "@/data";

export function ServiceSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestro Portafolio Completo"
          description="Cada servicio está diseñado para generar impacto real y resultados medibles en tu organización"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {CatalogoServiciosData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <GlobalCardService key={index} service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
