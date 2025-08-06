"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-redCustom to-orangeCustom relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold"
              >
                ¿Listo para Transformar tu Negocio?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white leading-tight"
              >
                Comienza la transformación de tu negocio hoy
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              >
                Únete a más de 500 empresas que ya han transformado su negocio
                con nuestras estrategias probadas. Agenda tu consulta gratuita y
                descubre cómo podemos ayudarte.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-redCustom hover:bg-gray-100 hover:scale-110 font-semibold px-8 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contacto">
                  <Phone className="mr-2 w-5 h-5" strokeWidth={2} />
                  Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2} />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:border-nones font-semibold px-8 py-4 text-lg"
              >
                <Link href="mailtto:info@marketingaldia.net">
                  <Mail className="mr-2 w-5 h-5" strokeWidth={2} />
                  Enviar Email
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 text-sm"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                Respuesta en 24 horas
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                Consulta sin compromiso
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                Estrategia personalizada
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
