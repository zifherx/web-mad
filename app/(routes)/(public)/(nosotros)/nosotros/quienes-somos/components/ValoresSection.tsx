"use client";

import { motion } from "framer-motion";
import { Award, Heart, Lightbulb, Target, Zap } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { fadeInUp, staggerContainer } from "@/utils/Variants";

export function ValoresSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los principios que guían cada una de nuestras acciones y decisiones
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {[
            {
              icon: Lightbulb,
              title: "Innovación",
              description:
                "Siempre un paso adelante, buscando nuevas formas de hacer las cosas.",
            },
            {
              icon: Heart,
              title: "Colaboración",
              description:
                "Juntos llegamos más lejos; el trabajo en equipo es clave.",
            },
            {
              icon: Target,
              title: "Compromiso",
              description:
                "Nos apasiona lo que hacemos y nos comprometemos con nuestros clientes.",
            },
            {
              icon: Award,
              title: "Excelencia",
              description:
                "Buscamos la perfección en cada detalle de nuestro trabajo.",
            },
            {
              icon: Zap,
              title: "Empoderamiento",
              description:
                "Creemos en el potencial de cada persona y trabajamos para desarrollarlo.",
            },
          ].map((valor, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#ff3d4d] to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <valor.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{valor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {valor.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
