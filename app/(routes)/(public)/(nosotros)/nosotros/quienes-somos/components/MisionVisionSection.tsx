"use client";

import { motion } from "framer-motion";
import { Globe, Target } from "lucide-react";

export function MisionVisionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-redCustom rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Contribuir en la mejora de los negocios a través de contenido de
              valor práctico y aplicativo, participando en la implementación de
              modelos de negocio rentables e innovadores mediante tecnologías de
              información. Nuestras alianzas estratégicas demuestran nuestro
              compromiso con nuestro público.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-redCustom rounded-full flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Visión</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ser la institución de referencia internacional que brinde la mejor
              experiencia en productos educativos, asesoramiento y desarrollo,
              ayudando a empresarios y profesionales en su proceso de cambio y
              transformación mediante herramientas prácticas que les permitan
              alcanzar los resultados que esperan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
