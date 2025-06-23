"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

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
            <Button asChild variant="ghost" size="sm" className="mr-4">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-[#ff3d4d] rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FileText className="w-8 h-8 text-white" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce los términos que rigen el uso de nuestros servicios y
              plataforma digital.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Información Importante
                </h3>
                <p className="text-blue-800 text-sm">
                  Estos términos y condiciones se rigen por las leyes de la
                  República del Perú. Al utilizar nuestros servicios, aceptas
                  cumplir con todas las condiciones establecidas.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
