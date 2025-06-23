"use client";

import { motion } from "framer-motion";

import { Title } from "@/components/shared/Title";

import { ServiceProp } from "@/types";

export function ProcessSection({ service }: ServiceProp) {
  const { process } = service;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestro Proceso de Trabajo"
          description="Una metodología probada que garantiza resultados excepcionales en cada proyecto"
        />

        <div className="grid md:grid-cols-5 gap-8">
          {process.map(({ description, step, title }) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 shadow-md h-full relative z-10">
                <div className="text-5xl font-bold text-redCustom/40 mb-4">{`0${step}`}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
              {step < 5 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 z-0 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-redCustom"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
