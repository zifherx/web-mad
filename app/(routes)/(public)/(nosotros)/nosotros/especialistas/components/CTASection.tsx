"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { BtnLargeWhatsApp } from "@/components/shared/BtnLargeWhatsApp";
import { NUMERO_WHATSAPP, WHATSAPP_MESSAGES } from "@/utils/Constants";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-redCustom to-orangeCustom text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para trabajar con los mejores?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Conecta con nuestros especialistas y transforma tu negocio con
            estrategias de clase mundial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-transform"
            >
              <Link href="/contacto">Solicitar Consultoría</Link>
            </Button>
            <BtnLargeWhatsApp
              celular={NUMERO_WHATSAPP}
              mensaje={
                WHATSAPP_MESSAGES.NOSOTROS_ESPECIALISTAS_CONTACTAR_WHATSAPP
              }
              text="Contactar por WhatsApp"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
