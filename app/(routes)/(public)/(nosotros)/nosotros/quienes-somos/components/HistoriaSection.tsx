"use client";

import { motion } from "framer-motion";

import { fadeInUp, scaleIn, staggerContainer } from "@/utils/Variants";
import Image from "next/image";

export function HistoriaSection() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <motion.p variants={fadeInUp}>
                Marketing Al Día es una comunidad joven pero poderosa que ha
                logrado reunir a los referentes más importantes de Latinoamérica
                y Europa en áreas como Marketing, Ventas, Negocios, Liderazgo,
                Economía, Innovación, Finanzas, Psicología, Experiencia de
                Usuario y Experiencia de Cliente, entre otros.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Además, convocamos a emprendedores exitosos que son ejemplo para
                quienes tienen una idea de negocio o emprendimiento en curso.
                Contamos con programas de negocios internacionales y programas
                de aceleramiento empresarial que buscan ayudar a empresarios,
                corporativos y emprendedores a crecer mediante estrategias de
                impacto.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Nuestros servicios incluyen: Consultoría en Estrategia Digital,
                Marketing Estratégico, Negocios, CX, conferencias de alto
                impacto, Desarrollo Web e E-Commerce, cursos de capacitación y
                Publicidad Estratégica.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="https://placehold.co/600x500"
              alt="Equipo de Marketing Al Día"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
