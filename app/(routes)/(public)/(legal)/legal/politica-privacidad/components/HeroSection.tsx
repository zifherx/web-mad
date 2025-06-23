"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="mr-4 hover:bg-redCustom/60 hover:text-white"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2} />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-[#ff3d4d] rounded-full mb-6"
            >
              <Shield className="w-8 h-8 text-white" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tu privacidad es importante para nosotros. Conoce cómo protegemos
              y utilizamos tu información personal.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">
                  Compromiso con la Privacidad
                </h3>
                <p className="text-gray-800 text-sm">
                  Estamos comprometidos con la seguridad de los datos de
                  nuestros usuarios. Esta política puede actualizarse, por lo
                  que recomendamos revisarla periódicamente.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
