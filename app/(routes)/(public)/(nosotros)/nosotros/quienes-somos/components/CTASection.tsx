"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-redCustom to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres ser parte de nuestra comunidad?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Únete a cientos de empresarios y profesionales que ya están
            transformando sus negocios con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-transform"
            >
              <Link href="/contacto">Contáctanos Hoy</Link>
            </Button>
            {/* <WhatsAppButton /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
