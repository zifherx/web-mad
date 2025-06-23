"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { BtnLargeWhatsApp } from "@/components/shared/BtnLargeWhatsApp";

import { ServiceProp } from "@/types";

export function CTASection({ service }: ServiceProp) {
  const { menuTitle } = service;

  return (
    <section className="py-20 bg-gradient-to-r from-orangeCustom to-redCustom text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl mb-8">
            Contáctanos hoy mismo y descubre cómo nuestro servicio de{" "}
            {menuTitle} puede ayudarte a alcanzar tus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">Solicitar Asesoría Gratuita</Link>
            </Button>
            <BtnLargeWhatsApp
              celular=""
              mensaje=""
              text="Contácanos por WhatsApp"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
