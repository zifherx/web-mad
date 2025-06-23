"use client";

import { CardProtectionNotice } from "@/components/shared/CardProtectionNotice";
import { TerminosImportantData } from "@/data";
import { motion } from "framer-motion";

export function ImportantInformationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Información Adicional Importante
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {TerminosImportantData.map((content) => (
                <CardProtectionNotice key={content.id} contenido={content} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-6 bg-gray-900 text-white rounded-lg"
            >
              <h3 className="font-semibold mb-3">
                Jurisdicción y Ley Aplicable
              </h3>
              <p className="text-gray-300">
                Estos términos se rigen por las leyes de la República del Perú.
                La jurisdicción para todas las disputas serán los Juzgados y
                Tribunales del Distrito Judicial de Lima, Perú.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
