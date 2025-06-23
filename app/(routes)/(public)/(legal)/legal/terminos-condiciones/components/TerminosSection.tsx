"use client";

import { motion } from "framer-motion";

import { TerminosCondicionesData } from "@/data";
import { fadeInUp, staggerContainer } from "@/utils/Variants";
import { CardLegal } from "@/components/shared/CardLegal";

export function TerminosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {TerminosCondicionesData.map((content) => (
            <motion.div key={content.id} variants={fadeInUp}>
              <CardLegal contenido={content} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
