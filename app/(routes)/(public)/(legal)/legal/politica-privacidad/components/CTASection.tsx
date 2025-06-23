"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-redCustom text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            ¿Preguntas sobre tu Privacidad?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Si tienes dudas sobre cómo manejamos tu información personal,
            estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hover:scale-105"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-redCustom hover:border-none hover:scale-105 transition-all duration-300"
            >
              <Link href="/legal/terminos-condiciones">
                Ver Términos y Condiciones
                <BookOpen className="ml-1 w-5 h-5" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
