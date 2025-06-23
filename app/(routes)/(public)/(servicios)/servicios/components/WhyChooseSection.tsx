"use client";

import { motion } from "framer-motion";
import { ShortSeviceData } from "@/data";
import { CardFeature } from "@/components/shared/CardFeature";
import { Title } from "@/components/shared/Title";

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="¿Por qué elegir Marketing Al Día?"
          description="Nos diferenciamos por nuestro enfoque estratégico y resultados
            comprobados"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ShortSeviceData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <CardFeature feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
