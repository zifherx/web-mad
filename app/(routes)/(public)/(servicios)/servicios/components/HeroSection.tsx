"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-redCustom via-orangeCustom to-redCustom/80 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-fit flex justify-center text-center items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4 mr-2" strokeWidth={2} />
          Soluciones Transformadoras
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Servicios que Revolucionan tu Negocio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-white/90 mb-8 leading-relaxed"
        >
          Desde estrategia hasta ejecución, ofrecemos soluciones integrales que
          transforman empresas tradicionales en líderes digitales del futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="#servicios">Explorar Servicios</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contacto">Consulta Gratuita</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
