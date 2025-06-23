"use client";

import { CardProtectionNotice } from "@/components/shared/CardProtectionNotice";
import { ProtectionNoticeData } from "@/data";
import { motion } from "framer-motion";

export function ProtectionNoticeSection() {
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
              Protección de Datos y Cumplimiento Legal
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {ProtectionNoticeData.map((content, index) => (
                <CardProtectionNotice key={content.id} contenido={content} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-6 bg-blue-900 text-white rounded-lg"
            >
              <h3 className="font-semibold mb-3">Retención de Datos</h3>
              <p className="text-blue-100">
                Los datos se conservarán mientras no se solicite la cancelación
                por parte del usuario. Existe un período mínimo de retención de
                12 meses desde el registro inicial, salvo solicitud formal
                justificada que será evaluada por nuestros directivos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
